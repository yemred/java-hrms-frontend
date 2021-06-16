import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import {
  Form,
  Message,
  Card,
} from "semantic-ui-react";
import CityService from "../../services/cityService/cityService";
import JobPositionService from "../../services/jobPositionService/jobPositionService";
import JobAdvertisementService from "../../services/jobAdvertisementService/jobAdvertisementService";
import WorkTypeService from "../../services/workTypeService/workTypeService";
import { useHistory } from "react-router-dom";

export default function ShareJobAdvertisement() {
  const [cities, setCities] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));

    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const history = useHistory();

  const formik = useFormik({
    // Formun Bşalıngıç değerlerini belirttiğimiz nesnedir
    initialValues: {
      cityId: "",
      jobPositionId:"",
      minSalary: "",
      maxSalary: "",
      countOfOpenPosition: "",
      applicationDeadline: "",
      workTypeId: "",
      description: "",    
    },
    validationSchema: Yup.object({
      cityId: Yup.number().required("Şehir Boş Geçilemez"),
      jobPositionId: Yup.number().required("İş Pozisyonu Boş Geçilemez"),
      minSalary: Yup.number().required("Minumum Maaş Alanı Boş Geçilemez"),
      maxSalary: Yup.number().required("Maximum Maaş Alanı Boş Geçilemez"),
      countOfOpenPosition: Yup.number().required("Açık Pozisyon Sayısı Boş Geçilemez"),
      applicationDeadline: Yup.date().required("Yayın Süresi Boş Geçilemez"),
      workTypeId: Yup.number().required("İş Tipi Boş Geçilemez"),
      description: Yup.string().required("Açıklama Boş Geçilemez"),
     
    }),

    onSubmit: (values) => {
      let jobAdvertisementModel = {
       
        city: {
          id: values.cityId,
        },
        jobPosition: {
          id: values.jobPositionId,
        },
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        countOfOpenPosition: values.countOfOpenPosition,
        applicationDeadline: values.applicationDeadline,
        workType: {
          id: values.workTypeId,
        },
        description: values.description,
          
      };

      let jobAdvertisementService = new JobAdvertisementService();
      jobAdvertisementService.addJobAdvertisement(jobAdvertisementModel)
        .then((result) => console.log(result));
      alert("Success");
      history.push("/jobadvertisement");
    },
  });

  const handleChangeSemantic = (field, value) => {
    formik.setFieldValue(field, value);
  };

  const citiesOptions = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  const jobPositionsOptions = jobPositions.map((jobPosition, index) => ({
    key: jobPosition.id,
    text: jobPosition.positionName,
    value: jobPosition.id,
  }));

  const workTypesOptions = workTypes.map((workType) => ({
    key: workType.id,
    text: workType.work_type_name,
    value: workType.id,
  }));

  return (
    <div>
      <Card fluid>
        <Card.Content header="İş ilanı Ekle" />
        <Card.Content>
          <Form >
            <Form.Group widths={3}>
              <Form.Dropdown
                required
                label="Şehirler"
                placeholder="Şehir Seçiniz"
                selection
                search
                value={formik.values.cityId}
                options={citiesOptions}
                onChange={(event, data) => {
                  handleChangeSemantic("cityId", data.value);
                }}
              />
              {formik.errors.cityId && formik.touched.cityId ? (
                <Message color="red">{formik.errors.cityId}</Message>
              ) : null}
            </Form.Group>

            <Form.Group widths={3}>
              <Form.Dropdown
                required
                label="Açık Pozisyon"
                placeholder="Açık Pozisyon"
                selection
                search
                value={formik.values.cityId}
                options={jobPositionsOptions}
                onChange={(event, data) => {
                  handleChangeSemantic("jobPositionId", data.value);
                }}
              />
              {formik.errors.cityId && formik.touched.cityId ? (
                <Message color="red">{formik.errors.cityId}</Message>
              ) : null}
            </Form.Group>

            <Form.Group widths={3}>
              <Form.Input
                label=" Minimum Maaş"
                name="minSalary"
                placeholder="Minimum Maaş"
                value={formik.values.minSalary}
                onChange={formik.handleChange}
              />
              {formik.errors.minSalary && formik.touched.minSalary ? (
                <Message color="red">{formik.errors.minSalary}</Message>
              ) : null}
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Input
                label=" Maximum Maaş"
                name="maxSalary"
                placeholder="Maximum Maaş"
                value={formik.values.maxSalary}
                onChange={formik.handleChange}
              />
              {formik.errors.maxSalary && formik.touched.maxSalary ? (
                <Message color="red">{formik.errors.maxSalary}</Message>
              ) : null}
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Input
                required
                label="Açık Posizyon Sayısı"
                name="countOfOpenPosition"
                placeholder="Açık Pozisyon Sayısı"
                value={formik.values.countOfOpenPosition}
                onChange={formik.handleChange}
              />
              {formik.errors.countOfOpenPosition &&
              formik.touched.countOfOpenPosition ? (
                <Message color="red">
                  {formik.errors.countOfOpenPosition}
                </Message>
              ) : null}
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Input
                required
                width={6}
                label="İlan Bitiş Süresi"
                name="applicationDeadline"
                placeholder="İlan Bitiş Süresi"
                value={formik.values.applicationDeadline}
                onChange={formik.handleChange}
              />
              {formik.errors.applicationDeadline &&
              formik.touched.applicationDeadline ? (
                <Message color="red">
                  {formik.errors.applicationDeadline}
                </Message>
              ) : null}
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Field>
                <Form.Dropdown
                  required
                  label="İş Tipi"
                  placeholder="İş Tipi Seçiniz"
                  selection
                  search
                  value={formik.values.workTypeId}
                  options={workTypesOptions}
                  onChange={(event, data) => {
                    handleChangeSemantic("workTypeId", data.value);
                  }}
                />
                {formik.errors.workTypeId && formik.touched.workTypeId ? (
                  <Message color="red">{formik.errors.workTypeId}</Message>
                ) : null}
              </Form.Field>
            </Form.Group>

            <Form.TextArea
              label="Açıklama"
              required
              name="description"
              placeholder="Açıklama"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            {formik.errors.description && formik.touched.description ? (
              <Message color="red">{formik.errors.description}</Message>
            ) : null}
            <Form.Button onClick={formik.handleSubmit} type="submit" positive>
              Submit
            </Form.Button>
            
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
