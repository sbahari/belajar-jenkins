pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 8909:8909' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
