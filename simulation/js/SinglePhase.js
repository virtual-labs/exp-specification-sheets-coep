function SinglePhase()
{
	let str=`
	<div class="container mt-4 step1" >
<!--	<h3><center style="margin-bottom:10px;">230V single phase 0.2 ~ 2.2kW</center></h3>-->
	<img src="images/230V_single_phase.jpg" class="img-fluid" style="width:100%;">
	
	</div>
<!--	<button class="btn btn-success " id="download" style="margin-right:10px" >PDF DOWNLOAD</button>-->
	`;
	$("#main-div").html(str);
//	document.getElementById('download').addEventListener('click', function () {
//		$("#download").prop("hidden",true);
//	    const element = document.querySelector('#main-div');
//
//	    html2canvas(element, { scale: 2 }).then(canvas => {
//	      const imgData = canvas.toDataURL('image/png');
//	      const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
//
//	      const pdfWidth = pdf.internal.pageSize.getWidth();
//	      const pdfHeight = pdf.internal.pageSize.getHeight();
//
//	      const imgWidth = pdfWidth;
//	      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
//
//	      let heightLeft = imgHeight;
//	      let position = 0;
//
//	      // Add first page
//	      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//	      heightLeft -= pdfHeight;
//
//	      // Add remaining pages
//	      while (heightLeft > 0) {
//	        position = heightLeft - imgHeight;
//	        pdf.addPage();
//	        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//	        heightLeft -= pdfHeight;
//	      }
//
//	      pdf.save("Specification3.pdf");
//	    });
//		$("#download").prop("hidden",false);
//	  });
}