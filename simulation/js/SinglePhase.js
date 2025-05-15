function SinglePhase()
{
	$("#result").prop("hidden",false);
	let str=`
	<div class="container mt-4 step1" >
<!--	<h3><center style="margin-bottom:10px;">230V single phase 0.2 ~ 2.2kW</center></h3>-->
	<img src="images/230V_single_phase.jpg" class="img-fluid" style="width:100%;">
	
	</div>
	<!--<button class="btn btn-success " id="pdfDownload" style="margin-right:10px" >PDF DOWNLOAD</button>-->
	`;
	$("#main-div").html(str);
	
	$("#result").click(function(){
				
				result();
			  });
	function generatePDF() {
	    // Select the div by its ID
	    const element = document.querySelector(".step1");
	 
	    // Use html2canvas to capture the element as a canvas
	    html2canvas(element, {
	        scale: 3, // Higher scale for better resolution
	        useCORS: true // Handle cross-origin resources
	    }).then(function (canvas) {
	        // Initialize the PDF document in landscape mode ('l') and A4 size
	        const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
	        // Get PDF page dimensions
	        const pdfWidth = pdf.internal.pageSize.getWidth();
	        const pdfHeight = pdf.internal.pageSize.getHeight();
	 
	        // Calculate the scaled dimensions to fit the content on one page
	        const canvasAspectRatio = canvas.width / canvas.height;
	        const pdfAspectRatio = pdfWidth / pdfHeight;
	 
	        let imgWidth, imgHeight;
	        if (canvasAspectRatio > pdfAspectRatio) {
	            // Scale by width
	            imgWidth = pdfWidth;
	            imgHeight = pdfWidth / canvasAspectRatio;
	        } else {
	            // Scale by height
	            imgHeight = pdfHeight;
	            imgWidth = pdfHeight * canvasAspectRatio;
	        }
	 
	        // Convert the canvas to image data in PNG format
	        const imgData = canvas.toDataURL("image/png", 1.0); // No compression
	 
	        // Add the image to the PDF (centered if scaled down)
	        const xOffset = (pdfWidth - imgWidth) / 2;
	        const yOffset = (pdfHeight - imgHeight) / 2;
	 
	        pdf.addImage(imgData, 'PNG', xOffset, yOffset, imgWidth, imgHeight);
	 
	        // Save the generated PDF
	        pdf.save("Single_phase_0.2.pdf");
	    });
	}
	 
	// Set up the button click event to generate the PDF
	$("#pdfDownload").on("click", function () {
	    generatePDF();
	});
	
	
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