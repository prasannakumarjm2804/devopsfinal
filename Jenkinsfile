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

        stage('Debug Workspace') {
            steps {
                script {
                    sh 'pwd'  // Print current directory
                    sh 'ls -l'  // List all files and folders
                }
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
