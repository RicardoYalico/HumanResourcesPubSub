pipeline {
    agent any

    stages {
        stage('Clonar y Actualizar Código') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/RicardoYalico/HumanResourcesPubSub.git'
                    ]]
                ])
                sh 'pwd'
            }
        }

        stage('Construir y Desplegar Docker') {
            steps {
                script {
                    sh '''
                        docker build -t rrhh-web .
                        docker stop rrhh-web-container || true
                        docker rm rrhh-web-container || true
                        docker run -d -p 3001:80 --name rrhh-web-container --restart unless-stopped rrhh-web
                        docker image prune -a -f
                    '''
                }
            }
        }
    }
}
