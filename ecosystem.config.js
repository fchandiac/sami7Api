module.exports = {
  apps: [{
    name: 'sami7Api',
    script: 'main.js',
    watch: true,
    ignore_watch: ["node_modules", "public"],
    watch_options: {
      followSymlinks: false
    },
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    instances: 'max',  // Esto usará todas las CPUs disponibles
    exec_mode: 'cluster'  // Esto habilita el modo de cluster para aprovechar múltiples instancias
  }]
};
