 let btn1 = document.querySelector("#btn1");
      let btn2 = document.querySelector("#btn2");
      let generateGradient = document.querySelector(".generateGradient");
      let textMessage = document.querySelector(".textMessage");
      let copyCode = document.querySelector(".copyCode");

      const handleCopy = (event) => {
        const textToCopy = event.target.textContent || event.target.value;

        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            alert(`Copied: ${textToCopy}`);
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy text.");
          });
      };

      const colorGenerator = () => {
        const colorCode = "0123456789abcdef";
        let colorName = "#"
        for(let i=1; i<=6; i++){
            colorName = colorName + colorCode[Math.floor(Math.random() *16)];
        }
        return colorName;
      }

      btn1.addEventListener("click", handleCopy );
      btn2.addEventListener("click", handleCopy );
      copyCode.addEventListener("click", handleCopy );

      generateGradient.addEventListener("click", () => {
        const hex1 = colorGenerator();
        const hex2 = colorGenerator();
        document.body.style.background = `linear-gradient(45deg, ${hex1}, ${hex2})`;
        btn1.style.backgroundColor = hex1;
        btn2.style.backgroundColor = hex2;
        copyCode.textContent = `background: linear-gradient(45deg,${hex1}, ${hex2});`
        btn1.textContent = hex1;
        btn2.textContent = hex2;
      });