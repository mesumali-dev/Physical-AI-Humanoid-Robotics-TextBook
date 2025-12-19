/**
 * PersonalizationService
 * Priority order:
 * 1. Hardcoded HF Space URL
 * 2. Localhost (dev)
 * 3. Same-origin fallback
 */

class PersonalizationService {
  constructor() {
    if (typeof window === 'undefined') return;

    this.apiBaseUrl =
      // 1️⃣ Hugging Face Space (explicit)
      'https://mesum-ali-physical-ai-humanoid-robotics-textbook.hf.space' ||

      // 2️⃣ Local development
      ((window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1')
        ? 'http://localhost:8000'
        : null) ||

      // 3️⃣ Fallback (same-origin)
      window.location.origin;

    // Normalize
    this.apiBaseUrl = this.apiBaseUrl.replace(/\/$/, '');

    this.personalizationEndpoint =
      `${this.apiBaseUrl}/api/personalization/chapter`;
  }

  extractChapterContent(chapterElement) {
    if (!chapterElement) {
      throw new Error('Chapter element is required');
    }

    return {
      title: chapterElement.querySelector('h1')?.innerText || '',
      content: chapterElement.innerText
    };
  }

  async personalizeChapter(chapterContent, chapterTitle, userProfile) {
    const response = await fetch(this.personalizationEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        chapter_content: chapterContent,
        chapter_title: chapterTitle,
        user_profile: userProfile
      })
    });

    if (!response.ok) {
      throw new Error(
        `API error ${response.status}: ${await response.text()}`
      );
    }

    return response.json();
  }

  toggleContent(original, personalized, showPersonalized) {
    return showPersonalized ? personalized : original;
  }

  isAuthenticated() {
    return typeof document !== 'undefined' && document.cookie.length > 0;
  }

  cachePersonalizedContent(chapterId, content) {
    sessionStorage.setItem(
      `personalized_content_${chapterId}`,
      JSON.stringify({ content, timestamp: Date.now() })
    );
  }

  getCachedPersonalizedContent(chapterId) {
    const raw = sessionStorage.getItem(
      `personalized_content_${chapterId}`
    );
    if (!raw) return null;

    const { content, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > 3600000) {
      sessionStorage.removeItem(`personalized_content_${chapterId}`);
      return null;
    }

    return content;
  }

  clearCachedContent(chapterId) {
    sessionStorage.removeItem(`personalized_content_${chapterId}`);
  }
}

export const personalizationService = new PersonalizationService();
export default personalizationService;
