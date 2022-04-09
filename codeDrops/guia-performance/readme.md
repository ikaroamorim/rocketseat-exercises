
Project created using Vite
Vite is quickier boiler plate to create react apps that requires the browser uses ES Modules

Create Project with Vite (Typescript)
npm init vite@latest guia-performance -- --template react-ts


Install the project
npm i

Run the project
npm run dev


#memo
Memo will check if there is state or properties changes

Recomended for
1 - Pure Functional Components -> Components that the output only depends on proporties it receives
2 - Renders too often -> E.g state is from input that the users fill, the state will change every character the user type in
3 - Re-render with same props
4 - Components Medium to Big Size -> In very simple components is faster to React create in virtual Dom than compare the properties

