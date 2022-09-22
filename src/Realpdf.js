import jspdf from 'jspdf';
import "jspdf-autotable";


export default function Realpdf(){
    function generate(){
        const doc =new jspdf()
        doc.auoTable({
            head:[['land','price','country']],
            body:
        
        })
    }
}