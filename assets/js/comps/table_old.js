class Table extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const headers = this.dataset.headers.split(",").map(header => header.trim())
                
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./assets/css/lib/bootstrap.min.css">
            <link rel="stylesheet" href="./assets/css/lib/icons/bootstrap-icons.css">

            <table class="table table-striped table-hover">
            <thead>
                <tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr>
            </thead>
            <tbody slot="tabledata"></tbody>
            </table>
        `;
        

   /*      const newData = [
            ["0", "21%", "Normal"],
            ["1", "16%", "LIST"]
        ];
        
        const hazardsTable = document.getElementById("hazards");
        hazardsTable.data = newData;
 */

        console.log('comp Table created')
    }

    /**
     * @param data {string[][]}
     */
/*     set data(data) {
        const tableBody = this.shadowRoot.querySelector("tbody")
        const rows = data.map(rowData => {
            const row = document.createElement("tr");
            const cells = rowData.map(cellData => {
                const cell = document.createElement("td");
                cell.textContent = cellData;
                return cell;
            })
            row.append(...cells);
            return row;
        })
        tableBody.innerHTML = "";
        tableBody.append(...rows);
    } */
}
customElements.define('tdd-table', Table);
