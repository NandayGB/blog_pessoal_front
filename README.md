# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



# Meu Blog Pessoal 📝

Bem-vindo ao repositório do meu blog pessoal! Este blog foi criado como parte do programa da Generation e é um espaço onde compartilho minhas ideias, pensamentos e aprendizados.

## Visão Geral 🌟

Este blog foi desenvolvido utilizando [HTML, CSS, JavaScript,TypeScript,React]. 

Componentes da Interface do Usuário 🎨
Home: A página inicial do blog foi construída para fornecer uma introdução convidativa ao conteúdo.
NavBar: Agora, há uma barra de navegação que facilita a exploração do blog e a busca por conteúdo específico.
Footer: O rodapé foi adicionado para fornecer informações adicionais e links úteis.
Integração com Swagger da Aplicação Farmácia 🛠️
Models de Categoria e Produto: Utilizando o Swagger da aplicação farmácia, foram criadas as models de categoria e produto, incluindo seus relacionamentos.
Implementação de Service: Foi desenvolvido um service com os métodos GetAll, Post, Put e Delete, facilitando a interação com a API backend. O caminho da aplicação backend em deploy está devidamente indicado para referência.

Páginas de Categoria 📚
GetAll: Agora é possível visualizar todas as categorias disponíveis em uma página dedicada.
Post/Put/Delete: Implementadas as funcionalidades de criação, atualização e exclusão de categorias, incluindo componentes e lógica correspondentes.
