import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobAdvertisementService from "../../services/jobAdvertisementService/jobAdvertisementService";


export default function jobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisementDetails, setJobAdvertisementDetails] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementById(id)
      .then((result) => setJobAdvertisementDetails(result.data.data));
  }, [id]);

  return (
    <div>
     Sayfada hata aldğım için bu şekilde atmak zorunda kaldım çalışmalara devam ediyorum!!!
    </div>
  );
}
