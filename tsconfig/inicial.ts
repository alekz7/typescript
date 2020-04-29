// tsc -init

// compilar todos los archivos de typescript a partir del archivo de configuracion tsconfig
// esto tambien compila los archivos de los subdirectorios

    //  tsc

// compilar solo los archivos indicados en tsconfig.json
// {
//     "compilerOptions": {      
//       /* Advanced Options */      
//     }
//     ,"files":["inicial.ts","subfolder/archivo.ts"]
// }

    //  tsc

// incluir solo ciertos subdirectorios    
//      tsconfig.json
// {
//     "compilerOptions": {      
//       /* Advanced Options */      
//     }
//     ,"files":["inicial.ts","subfolder/archivo.ts"],
//      ,"include":["nombre_directorio"]
//      ,"exclude":["nombre_directorio_a_excluir"]
// }