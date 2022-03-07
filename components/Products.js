import styles from '../styles/Home.module.css'
const Products = (props) => {
    function getDate(date){
        let nowMinutes = new Date().getMinutes()
        let nowHour = new Date().getHours()
        let dateMinutes = new Date(date).getMinutes()
        let dateHour = new Date(date).getHours()
        let formatDate = new Date(date).toLocaleDateString()
        let today = new Date().toLocaleDateString()

        var aFecha1 = formatDate.split('/');
        var aFecha2 = today.split('/');
        var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
        var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
        var dif = fFecha2 - fFecha1;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        if(dias<7 && dias >0){
            return "hace "+ dias+' dias'
        }
        else if(dias==0 && (nowHour-dateHour) >1){
            let diff = nowHour-dateHour
            return 'Hace '+ diff+" horas"
        }
        else if(nowHour == dateHour && nowMinutes==dateMinutes){
            return "hace 1 hora"
        }
        else if(nowHour == dateHour || (nowHour - dateHour) ==1  && (nowMinutes - dateMinutes) <0){
            if( (nowHour - dateHour) ==1){
                var m1 = (60-dateMinutes)+nowMinutes
                return "Hace "+ m1+" minutos"
            }
            else{
                let diff =nowMinutes-dateMinutes
                return "Hace "+diff+" minutos"
            }
        }
        
        else{
            return formatDate
        }
    }
    return(
        <>
            <div className={styles.grid}>
                {props.products.map(item =>(
                        <div className={styles.card} key={item.objectID}>
                            <h3>{item.story_title}</h3>
                            <p>{item.author}</p>
                            <h6 className={styles.subtitle}>{getDate(item.created_at)}</h6>
                        </div>
                ))}
            </div>
        </>
    )
}

export default Products;