

const { Restaurante, TipoCocina } = require('./models'); // Importa los modelos definidos en tu archivo

const añadirRestaurante = async () => {
    try {
        const ingredientes = [2, 19, 22]
        const restObj = {
            nombre: 'Restaurante Nombre bonito',
            descripcio: 'Mejor restaurante del barrio',
            tiempo: '1 hora',
            dificultad: 'Media',
            tipo: 'Postre',
            foto_receta: 'receta1.jpg'
        }

        const receta = await Restaurante.create(restObj);



        // Crear algunos tipos de cocina
        const tipo1 = await TipoCocina.create({ nombre_tipo: 'Mediterránea' });
        const tipo2 = await TipoCocina.create({ nombre_tipo: 'Asiática' });

        // Crear una receta


        // Asociar ingredientes a la receta
        await Receta_Ingrediente.create({ recetaId: receta1.id, ingredienteId: ingrediente1.id, cantidad: 250, medida: 'gramos' });
        await Receta_Ingrediente.create({ recetaId: receta1.id, ingredienteId: ingrediente2.id, cantidad: 150, medida: 'gramos' });
        await Receta_Ingrediente.create({ recetaId: receta1.id, ingredienteId: ingrediente3.id, cantidad: 3, medida: 'unidades' });

        // Crear un procedimiento para la receta
        const procedimiento1 = await Procedimiento.create({
            numero_procedimiento: '1',
            desc_procedimiento: 'Mezclar la harina y el azúcar en un bol grande',
            foto_procedimiento: 'mezclar.jpg'
        });

        // Asociar el procedimiento a la receta
        await receta1.addProcedimiento(procedimiento1);

        console.log('Datos creados exitosamente.');
    } catch (error) {
        console.error('Error al crear datos:', error);
    }
}

module.exports = { añadirRestaurante }
