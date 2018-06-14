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
        stage('Check') {
            steps {
                sh 'yarn lint -f checkstyle -o checkstyle/report.xml || true'
                checkstyle pattern: 'checkstyle/report.xml'
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
