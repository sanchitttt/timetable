import React, { useState } from 'react'
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import InvoiceItemMobile from '../../components/InvoiceItemMobile';
import InvoicesHeading from '../../components/PageHeading';

function TeachersMobile({ invoices }) {
    const [data, setData] = useState(invoices);
    return (
        <div>
            <MobileNavbar />
            <div className='flex justify-center flex-col items-center gap-[25px]'>
                <div className='mt-[20px] w-[327px] flex justify-center'>
                    <InvoicesHeading
                        amount={data.length}
                        subHeading='teachers'
                    >
                        Teachers
                    </InvoicesHeading>
                </div>
                {data.map((item) => {
                    return <InvoiceItemMobile
                        key={item.id}
                        id={item.id}
                        clientName={item.clientName}
                        clientEmail={item.clientEmail}
                        paymentDue={item.paymentDue}
                        total={item.total}
                        status={item.status}
                        totalSubjectsTaught={item.totalSubjectsTaught}
                    />
                })}
                {/* <NoInvoices /> */}
            </div>


        </div>
    )
}

export default TeachersMobile;