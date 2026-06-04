import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light mt-5 border-top">
      <div className="container mt-5">
        <div className="row py-4 mt-5 px-lg-5">
          {/* Logo + Social */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img src="/media/images/logo.svg" alt="Zerodha Logo" width="140" />
            <p className="text-muted mt-4">
              &copy; {new Date().getFullYear()} Zerodha. All rights reserved.
            </p>

            <div className="d-flex gap-3 fs-5">
              <a
                href="https://github.com/Mandeep-Parmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mandeep-p-b44930327/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a href="mailto:mandeeppar07@gmail.com" className="text-dark">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 d-flex flex-column gap-2">
            <p className="fw-semibold fs-5">Account</p>
            <a href="#" className="text-decoration-none text-muted">
              Open demat account
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Minor demat account
            </a>
            <a href="#" className="text-decoration-none text-muted">
              NRI demat account
            </a>
            <a href="#" className="text-decoration-none text-muted">
              HUF demat account
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Commodity
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Dematerialisation
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Fund transfer
            </a>
            <a href="#" className="text-decoration-none text-muted mb-4">
              MTF
            </a>
          </div>

          <div className="col-lg-2 col-md-6 d-flex flex-column gap-2">
            <p className="fw-semibold fs-5">Support</p>
            <a href="#" className="text-decoration-none text-muted">
              Contact us
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Support portal
            </a>
            <a href="#" className="text-decoration-none text-muted">
              How to file a complaint?
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Status of your complaints
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Bulletin
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Circular
            </a>
            <a href="#" className="text-decoration-none text-muted mb-4">
              Z-Connect blog Downloads
            </a>
          </div>

          <div className="col-lg-2 col-md-6 d-flex flex-column gap-2">
            <p className="fw-semibold fs-5">Company</p>
            <a href="#" className="text-decoration-none text-muted">
              About
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Philosophy
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Press & media
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Careers
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Zerodha Cares (CSR)
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Zerodha.tech
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Open source
            </a>
            <a href="#" className="text-decoration-none text-muted mb-4">
              Referral program
            </a>
          </div>

          <div className="col-lg-2 col-md-6 d-flex flex-column gap-2">
            <p className="fw-semibold fs-5">Quick links</p>
            <a href="#" className="text-decoration-none text-muted">
              Upcoming IPOs
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Brokerage charges
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Market holidays
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Economic calendar
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Calculators
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Markets
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Sectors
            </a>
            <a href="#" className="text-decoration-none text-muted mb-4">
              Gift Nifty
            </a>
          </div>

          <p className="footer-text mt-5">
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p className="footer-text">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="footer-text">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p className="footer-text">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="footer-text">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p className="footer-text">
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p className="footer-text">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>

          <p className="footer-text">
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p className="footer-text">
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
