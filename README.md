# dev-ops-chalenge

## DEV-Stack
     - API: Node.JS
     - Ferramenta de testes: JEST
     - Ferramenta CI/CD: GitHub Actions
     - API Host: AWS Elastic Beanstalk
     - Automação de infra: Terraform
    
## API 
    - Base URL http://vd-chalenge.eba-dwqxrm84.us-east-2.elasticbeanstalk.com/
    - Endpoints
        -Soma
            - Endpoint: /sum
            - Parâmetros:
                - term_one
                - term_two
            - Exemplo: http://vd-chalenge.eba-dwqxrm84.us-east-2.elasticbeanstalk.com//api/sum?term_one=11&term_two=4
        -Subtração
            - Endpoint: /sub
            - Parâmetros:
                - term_one
                - term_two
            - Exemplo: http://vd-chalenge.eba-dwqxrm84.us-east-2.elasticbeanstalk.com//api/sub?term_one=11&term_two=4
        -Multiplicação
            - Endpoint: /mul
            - Parâmetros:
                - term_one
                - term_two
            - Exemplo: http://vd-chalenge.eba-dwqxrm84.us-east-2.elasticbeanstalk.com//api/mul?term_one=11&term_two=4
        -Divisão
            - Endpoint: /div
            - Parâmetros:
                - term_one
                - term_two
            - Exemplo: http://vd-chalenge.eba-dwqxrm84.us-east-2.elasticbeanstalk.com//api/div?term_one=11&term_two=4

## Configurações GitHub actions
    - Adicionar secrets ao Repositório.
        - Setings > Secrets > New repository secret
            - AWS_ACCESS_KEY_ID
            - AWS_SECRET_ACCESS_KEY
        *Para obter os valores vá ao painel da AWS então clique em:
            - "Perfil" > My security Credentials > Access keys (access key ID and secrect access key) > Create new Access Key
            - Guarde essas informações temporariamente pois serão necessárias durante a configuração da AWS.

## Configurações AWS
    - Instalação Terraform
        Execute os passos contidos no seguinte link
        * https://learn.hashicorp.com/tutorials/terraform/install-cli

        Execute os passos contidos no seguinte link
        * https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html#cliv2-linux-install
        * Após a instalação execute o comando: aws configure
            - Por padrão estou utilizando a region: us-east-2

    - Utilizando o Console vá até a pasta "infra" e execute.
        terraform apply
            
## Configurações CI/CD
    - Deploy Action:
        Trigger: Commit realizado na branch "main"
        Branch: main
        Arquivo: .github/workflows/deploy.js.yml  
        Configurações:
            application_name: vd-chalenge
            environment_name: vd-chalenge
            region: us-east-2
        
    - Test Action
        Trigger: Commit realizado na branch "dev"
        Branch: dev
        Arquivo: .github/workflows/test-application.js.yml  