import React from "react";
import Section from "../common/Section";
import { GoDotFill } from "react-icons/go";

type Props = {};

const Refund = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className="flex flex-col text-justify gap-4 text-slate-900">
          <p className="font-semibold">
            Any statutory rights which you may have as a Consumer are not affected by these Terms.
            In particular, you have the following additional rights: You have a right to cancel a
            booked test. If you wish to cancel your test, you need to contact us via calling us or
            writing on the email below.
          </p>
          <p className="font-bold text-lg py-2 text-[#ff5e14]">
            info@constructioncardshelpline.co.uk
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">CITB Test :</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <div className="flex  items-start  first-letter:  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                {`  If at the time you contact us, we have not yet booked your test, you will get a full
                refund. However, if you contact us after booking confirmation was sent to you (by
                email or text message), you will not be entitled to cancel and refund may be given
                at management's discretion.`}
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                {`The person taking a test ("the Candidate") is however responsible for attending the test centre and taking the test. 
                Construction Cards Helpline is not responsible if the Candidate does not arrive at the test on time, if the Candidate forgets to take a 
                valid proof of his ID to the test; if the Candidate fails the test, if the Candidate chooses to do the wrong type of test, if the Candidate 
                makes any other form of error in relation to the test or any related matters.`}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Rescheduling Policy for CITB Test</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p className="">
              If you wish to reschedule the test you booked with us, you must contact us by email:
             info@constructioncardshelpline.co.uk or by calling us on: +91 800 0016 122, providing us the
              First Name, Surname and Invoice number
            </p>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                {`You must inform us at least 4 working days prior to your test date. If you fail to contact us as set out above,
                 you will be obliged to pay the full charge including any booking fee or admin fee.`}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">CSCS Cards :</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              Our CSCS card application assistance service is not a refundable service but in
              exceptional circumstances, management may give refund at its discretion to customers.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Online/Classroom courses :</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p className="">
              Our online/classroom courses are not refundable under any condition (if we already
              book and confirmation is sent). Rescheduling of course can be done 4 days prior to
              your course. A new date will be provided as per our course availability.
            </p>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                {`The person taking a course ("the Candidate") is however responsible for attending the course centre and taking the course. Construction Cards Helpline is not responsible if the Candidate does not arrive at the centre on time, if the Candidate forgets to take a valid proof of his ID to the centre, if the Candidate fails the course, if the Candidate makes any other form of error in relation to the course or any related matters.`}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Revision Material :</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              This is an online material, all our mock papers are online. If material is supplied it
              cannot be refunded or returned.
            </p>
          </div>

          <p className="py-2">
            For more details or query you can reach us we are available from Mon to Fri between 8:00
            AM – 7:00 PM and Saturday 9:00 AM to 6:00 PM you can reach us at +91 800 0016 122
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Refund;
