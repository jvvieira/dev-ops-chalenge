# dev-ops-chalenge


## DEV-Stack
     - API: Node.JS
     - Ferramenta de testes: JEST
     - Ferramenta CI/CD: GitHub Actions
     - API Host: AWS Elastic Beanstalk
    
## API 
    - Base URL http://devopschalenge-env.eba-a7d8wpm4.us-east-2.elasticbeanstalk.com/api/
    - Endpoints
        -Soma
            - Endpoint: /sum
            - Paramentros:
                - term_one
                - term_two
            - Exemplo: http://devopschalenge-env.eba-a7d8wpm4.us-east-2.elasticbeanstalk.com/api/sum?term_one=11&term_two=4
        -Subtração
            - Endpoint: /sub
            - Paramentros:
                - term_one
                - term_two
            - Exemplo: http://devopschalenge-env.eba-a7d8wpm4.us-east-2.elasticbeanstalk.com/api/sub?term_one=11&term_two=4
        -Multiplicação
            - Endpoint: /mul
            - Paramentros:
                - term_one
                - term_two
            - Exemplo: http://devopschalenge-env.eba-a7d8wpm4.us-east-2.elasticbeanstalk.com/api/mul?term_one=11&term_two=4
        -Divisão
            - Endpoint: /div
            - Paramentros:
                - term_one
                - term_two
            - Exemplo: http://devopschalenge-env.eba-a7d8wpm4.us-east-2.elasticbeanstalk.com/api/div?term_one=11&term_two=4

## Configurações GitHub actions
    - Adicionar secrets ao Repositorio.
        - Setings > Secrets > New repository secret
            - AWS_ACCESS_KEY_ID
            - AWS_SECRET_ACCESS_KEY
        *Para obter os valores vá ao painel da AWS então clique em:
            - "Perfil" > My security Credentials > Access keys (access key ID and secrect access key) > Create new Access Key

## Configurações AWS
    - Criar um novo ambiente de Elastic Beanstalk. Selecionar a plataforma Node.JS
    - Deixar as configurações conforme abaixo

            Rolling updates and deployments	
                Batch size: 100%
                Command timeout: 600
                Deployment policy: All at once
                Healthy threshold: Ok
                Ignore health check: disabled
                Rolling updates: disabled	
            
## Configurações CI/CD
    - Deploy Action:
        Branch: main
        Arquivo: .github/workflows/deploy.js.yml  
        Configurações:
            application_name: dev-ops-chalenge
            environment_name: Devopschalenge-env
            region: us-east-2
    - Test Action
        Branch: dev
        Arquivo: .github/workflows/test-application.js.yml  