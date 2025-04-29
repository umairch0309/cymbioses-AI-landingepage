import {
  AppointmentsCard,
  AppointmentsList,
  AppointmentItem,
  AppointmentDate,
  AppointmentInfo,
} from "@/styles/EHRStyled";
import { HeadingStyled, Paragraph } from "@styles/ElementsStyled";
import { ReactSVG } from "react-svg";

const Appointments = ({ hasAppointments, appointments = [] }) => {
  return (
    <AppointmentsCard className="border-grey">
      {hasAppointments ? (
        <AppointmentsList>
          {appointments.map((appointment, index) => (
            <AppointmentItem key={index}>
              <AppointmentDate>
                <div className="date">{appointment.date}</div>
                <div className="time">{appointment.time}</div>
              </AppointmentDate>
              <AppointmentInfo>
                <div className="title">{appointment.title}</div>
                <div className="doctor">{appointment.doctor}</div>
              </AppointmentInfo>
            </AppointmentItem>
          ))}
        </AppointmentsList>
      ) : (
        <div className="text-center d-flex align-items-center justify-content-center flex-column h-100">
          <ReactSVG src="/images/no-record.svg" />
          <HeadingStyled
            className="my-4 text-dark-purple-3"
            $size="18px"
            $weight="700"
          >
            No appointments
          </HeadingStyled>
          <Paragraph className="text-grey-clr6" $size="11px">
            You currently do not have any upcoming <br />
            appointment.
          </Paragraph>
        </div>
      )}
    </AppointmentsCard>
  );
};

export default Appointments;
