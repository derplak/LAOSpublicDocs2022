import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
  title: 'Facil de Usar [Easy to Use]',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus fue diseñado desde cero para instalarse fácilmente y
        usarse para poner en funcionamiento su sitio web rápidamente 
      </>
    ),
  },
  {
    title: 'Enfócate en lo que importa [Focus on What Matters]',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus te permite concentrarte en tus documentos y nosotros nos encargamos de las tareas tediosas.
        Vamos adelante y mueva sus documentos al directorio <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Energizado por React [Powered by React]',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Amplíe o personalice el diseño de su sitio web reutilizando React. Docusaurio puede
        extenderse reutilizando el mismo encabezado y pie de página.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
