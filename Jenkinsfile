pipeline {
    agent {
        docker { image 'node:8-alpine' }
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test --coverage'
                step([
                    $class: 'CloverPublisher',
                    cloverReportDir: 'coverage',
                    cloverReportFileName: 'clover.xml'
                ])
            }
        }
    }
}
