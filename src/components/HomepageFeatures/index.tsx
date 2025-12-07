import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link'; // Import Link
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string; // Add link property
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Module 1: Foundational Robotics',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore the fundamental concepts and building blocks of robotics, from kinematics to control systems.
      </>
    ),
    link: '/docs/module1/chapter1',
  },
  {
    title: 'Module 2: Advanced Simulation & Perception',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dive into advanced simulation techniques and how robots perceive and interact with their environment.
      </>
    ),
    link: '/docs/module2/chapter1',
  },
  {
    title: 'Module 3: Embodied Intelligence & Learning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Understand how robots learn, adapt, and exhibit intelligent behavior in complex scenarios.
      </>
    ),
    link: '/docs/module3/chapter1',
  },
  {
    title: 'Module 4: Real-World Integration & Deployment',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn about the challenges and strategies for deploying robots in real-world applications.
      </>
    ),
    link: '/docs/module4/chapter1',
  },
  {
    title: 'Capstone Project: Autonomous Humanoid',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Apply your knowledge to build an autonomous humanoid robot, integrating all concepts learned.
      </>
    ),
    link: '/docs/capstone/autonomous-humanoid',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) { // Add link to props
  return (
    <div className={clsx('col col--4', styles.featureCard)}> {/* Add featureCard class */}
      <Link to={link} className={styles.featureLink}> {/* Wrap content in Link */}
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
