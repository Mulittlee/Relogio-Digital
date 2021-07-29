import './style.css'

function sectionHora() {
    var data = new Date()
    var hora = data.getHours();

    if (hora >= 6 && hora < 12) {
        var img = 'amanhecer'
    } else if (hora >= 12 && hora < 18) {
        var img = 'tardecer'
    } else {
        var img = 'noite'
    }
    
    return/*html*/`
        <section>
            <div>
                <p>agora são: ${hora}</p>
            </div>
            <div>
                <img src="../image/${img}.jpg" alt="foto dos horario"/>
            </div>
        </section>
    `
}
 
export default sectionHora