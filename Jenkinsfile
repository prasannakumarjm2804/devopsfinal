pipeline {
    agent any  
    environment {
        DOCKER_IMAGE = 'prasannakumarjm/shop:latest'
    }
    stages { 
        stage('Checkout Code') {
            steps {
                script {
                    sh 'git reset --hard origin/main'
                    sh 'git pull origin main'
                }
            }
        }

        stage('Verify Files in Workspace') {
            steps {
                sh 'ls -l'
            }
        }

        stage('Build and Push Docker Image') { 
            steps { 
                script {
                    sh 'chmod +x deploy.sh'
                    sh './deploy.sh'
                }
            }
        }
    }
}

