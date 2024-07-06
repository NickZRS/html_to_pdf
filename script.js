function downloadPdf(){
    const titulo_file = document.querySelector(".titulo_file");
    const subt_file = document.querySelector(".subt_file");
    const corpo_file =document.querySelector(".corpo_file");

    const titulo = document.querySelector(".titulo").value;
    const subt = document.querySelector(".subt").value;
    const corpo = document.querySelector(".corpo").value;
    
    titulo_file.textContent = titulo;
    subt_file.textContent = subt;
    corpo_file.textContent = corpo;


    const item = document.querySelector(".content_file");
    

    var opt = {
        margin:        1,
        filename:      'file.pdf',
        html2canvas :  {scale: 2},
        jsPDF:         {unit: 'in', format: 'letter', orientation: 'portrait'}
    };


    html2pdf().set(opt).from(item).save();
}