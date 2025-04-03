pipeline {
    agent any  
    environment {
        DOCKER_IMAGE = 'prasannakumarjm/shop:latest'
    }
    stages { 
        stage('Checkout Code') {
            steps {
                script {
                    // Ensure Jenkins pulls the latest code
                    sh 'git reset --hard origin/main'
                    sh 'git pull origin main'
                }
            }
        }
        
        stage('Verify Files in Workspace') {
            steps {
                sh 'ls -l'  // Debugging: List all files to check if index.html exists
            }
        }

        stage('Build and Push Docker Image') { 
            steps { 
                script {
                    // Grant execute permissions to deploy.sh
                    sh 'chmod +x deploy.sh'

                    // Build and push Docker image
                    sh './deploy.sh'
                }
            }
        }
    }
}
