import React from 'react';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import InvoiceItemDesktop from '../../components/InvoiceItemDesktop';
import PageHeading from '../../components/PageHeading';
import InvoicesHeading from '../../components/PageHeading';
const invoice = {
  "id": "RT3080",
  "createdAt": "2021-08-18",
  "paymentDue": "2021-08-19",
  "description": "Re-branding",
  "paymentTerms": 1,
  "clientName": "Jensen Huang",
  "clientEmail": "jensenh@mail.com",
  "status": "paid",
  "senderAddress": {
    "street": "19 Union Terrace",
    "city": "London",
    "postCode": "E1 3EZ",
    "country": "United Kingdom"
  },
  "clientAddress": {
    "street": "106 Kendell Street",
    "city": "Sharrington",
    "postCode": "NR24 5WQ",
    "country": "United Kingdom"
  },
  "items": [
    {
      "name": "Brand Guidelines",
      "quantity": 1,
      "price": 1800.90,
      "total": 1800.90
    }
  ],
  "total": 1800.90
}

function TeachersDesktop({ invoices }) {
  return (
    <div className='relative flex justify-center item-center flex-col'>
      <div className='desktop-navbar absolute left-[0px] h-[100%]'>
        <DesktopNavbar />
      </div>

      <div className='mobile-navbar w-[100%]'>
        <MobileNavbar />
      </div>

      <div className='flex items-center justify-center flex flex-col mt-[25px]'>
        <div className='desktop:w-[730px] biggerDesktops:w-[900px] justify-between'>
          <PageHeading
            buttonText={'Add teacher'}
            amount={invoices.length}
            subHeading={'Teachers'}
          >
            Teachers
          </PageHeading>
        </div>

        {invoices.map((invoice) => {
          return <InvoiceItemDesktop
            key={invoice.id}
            id={invoice.id}
            clientName={invoice.clientName}
            clientEmail={invoice.clientEmail}
            paymentDue={invoice.paymentDue}
            total={invoice.total}
            status={invoice.status}
            totalSubjectsTaught={invoice.totalSubjectsTaught}
          />
        })}
      </div>
    </div>
  )
}

export default TeachersDesktop;