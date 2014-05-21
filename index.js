// These are all the exports for the NodeJS environment.
// The idea is that JointJS can be used exactly the same way in the browser and also in Node.

module.exports = {

    dia: {
        Graph: require('./src/joint.dia.graph').Graph,
        Link: require('./src/joint.dia.link').Link,
        LinkView: require('./src/joint.dia.link').LinkView,
        Element: require('./src/joint.dia.element').Element,
        ElementView: require('./src/joint.dia.element').ElementView,
        Cell: require('./src/joint.dia.cell').Cell,
        CellView: require('./src/joint.dia.cell').CellView,
        Paper: require('./src/joint.dia.paper').Paper
    },
    util: require('./src/core').util,
    shapes: require('./plugins/shapes'),
    V: require('./src/vectorizer')
};
