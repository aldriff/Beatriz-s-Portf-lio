 function filtrar(escolha)
			{
			 	if (escolha == 1) 
			 	{
					document.getElementById("view-all").style.display = "inline";
			 		document.getElementById("drawing").style.display = "none";
					document.getElementById("illustration").style.display = "none";
					document.getElementById("animation").style.display = "none";
				}
					
				else if (escolha == 2) 
				{
					document.getElementById("view-all").style.display = "none";
			 		document.getElementById("drawing").style.display = "inline";
					document.getElementById("illustration").style.display = "none";
					document.getElementById("animation").style.display = "none";
				}

				else if (escolha ==3) 
				{
					document.getElementById("view-all").style.display = "none";
			 		document.getElementById("drawing").style.display = "none";
					document.getElementById("illustration").style.display = "inline";
					document.getElementById("animation").style.display = "none";

				}

				else if (escolha ==4)
				{
					document.getElementById("view-all").style.display = "none";
			 		document.getElementById("drawing").style.display = "none";
					document.getElementById("illustration").style.display = "none";
					document.getElementById("animation").style.display = "inline";
				}
}