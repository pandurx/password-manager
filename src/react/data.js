/**
 * @type {Invoice[]}
 */
 let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995"
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000"
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003"
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997"
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2010,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2011,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2012,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2013,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2014,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2015,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2016,
      amount: "$4,600",
      due: "01/27/2998"
    }
  ];
  
  let title = "Password Manager";
  let user = {
      first: "john",
      last: "doe",
      username: "john.doe@gmail.com"
  };
  let menus = [
      {link:"/socials", text: "social"},
      {link:"/emails", text: "email"}
  ];


  export function getInvoices() {
    return invoices;
  }
  

  export function getUser() {
    return user;
  }

  export function getMenus() {
    return menus;
  }

  export function getTitle() {
    return title;
  }
  
  /**
   * @param {number} number
   * @returns {Invoice}
   */
  export function getInvoice(number) {
    return invoices.find(invoice => invoice.number === number);
  }
  
  /**
   * @param {number} number
   * @returns {void}
   */
  export function deleteInvoice(number) {
    invoices = invoices.filter(invoice => invoice.number !== number);
  }
  
  /**
   * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
   */
  