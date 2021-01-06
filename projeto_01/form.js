var modal = document.getElementById("form");
            var btn = document.getElementById("questionForm");
            var span = document.getElementsByClassName("close")[0];

            btn.onclick = () => {
                modal.style.display = "block";
            }

            window.onclick = (event) => {
                if (event.target == modal || event.target == span) {
                    modal.style.display = "none";
                }
            }