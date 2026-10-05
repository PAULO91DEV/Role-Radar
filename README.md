# RolêRadar

- PAULO HENRIQUE DE SOUZA — 1680482222027

## Como executar

Siga os passos abaixo para configurar e executar a aplicação a partir de um clone do repositório:

1. **Instalar as dependências:**
   No terminal, na pasta raiz do projeto, instale as dependências executando:
   ```bash
   npm install
   ```

2. **Configurar as chaves de acesso:**
   Abra o arquivo `src/utils/chaves.js` e substitua os valores de placeholder pelas chaves válidas:
   - `GEOAPIFY_KEY`: crie uma conta gratuita em [https://myprojects.geoapify.com](https://myprojects.geoapify.com), crie um projeto e copie a sua chave de API (utilizada para Places API e Static Maps API).
   - `PRIMEUI_LICENSE`: utilize a chave da licença Community da PrimeReact distribuída para o grupo/estudantes.

   O arquivo `src/utils/chaves.js` deve ficar assim:
   ```javascript
   export const GEOAPIFY_KEY = 'SUA_CHAVE_GEOAPIFY'
   export const PRIMEUI_LICENSE = 'SUA_LICENCA_PRIMEUI'
   ```

3. **Iniciar a aplicação:**
   Inicie o servidor de desenvolvimento Vite:
   ```bash
   npm run dev
   ```

4. **Acessar no navegador:**
   Abra o endereço indicado pelo terminal (por padrão, `http://localhost:5173`).

5. **Permissão de localização:**
   Ao carregar a página, o navegador solicitará **permissão de acesso à sua localização**. É necessário autorizar o acesso para que a aplicação obtenha as coordenadas geográficas, exiba seu mapa no cartão "Você está aqui" e possa buscar os estabelecimentos no raio desejado.
