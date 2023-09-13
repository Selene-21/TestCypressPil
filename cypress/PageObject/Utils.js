class Utils { 
    /**
    * @method getCompleteDate
    * @returns {Array} [dia, mes, anio] - Ejemplo [12, "Septiembre", 2023]
    */

    getCompleteDate = () => { 
        
         const meses = [
            'Enero', 
            'Febrero', 
            'Marzo', 
            'Abril', 
            'Mayo', 
            'Junio', 
            'Julio', 
            'Agosto', 
            'Septiembre', 
            'Octubre',
            'Noviembre', 
            'Diciembre'];
             const fechaActual = new Date();
             const diaActual = fechaActual.getDate();
             const mesActual = fechaActual.getMonth();
             const anioActual = fechaActual.getFullYear();
             const nombremesActual = meses[mesActual];
            
            cy.log(nombremesActual);
            cy.log(anioActual);
            cy.log(diaActual);
            return[diaActual, nombremesActual, anioActual];
    }; 



};

export default new Utils();