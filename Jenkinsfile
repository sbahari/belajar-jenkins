pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 8909:8909' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}