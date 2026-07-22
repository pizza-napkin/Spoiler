document.addEventListener("click", (e) => {
    if (e.target.id == "spoilBtn") {
        const inp = document.getElementById("spoil").value

        let retStr = "";
        for (let i = 0; i < inp.length; i++) {
            // console.log(inp[i]);
            if (inp[i] != "\n") {
                retStr += "||" + inp[i] + "||";
            }
            else {
                retStr += inp[i];
            }
        }
        // console.log(retStr);
        navigator.clipboard.writeText(retStr);
    }
});