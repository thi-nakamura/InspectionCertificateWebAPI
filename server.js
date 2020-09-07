// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.get('/v1/inspections/MC/', (req, res) => {
  
  var reqHeader_companyCode = req.get('companyCode');
  if (reqHeader_companyCode == undefined)
  {
    res.status(403).send();
    return;
  }
  else if (reqHeader_companyCode == "000001")
  {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.setHeader('Content-Length', '1546');
    res.status(200).json(resData);
    return;
  }
  else
  {
    res.status(404).send();
    return;
  }
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));

const resData =
  {
    "id":"12345",
    "qr_scan_mode":"",
    "c1_system_id":"",
    "c1_version_num":"",
    "c1_export_arrangement_num":"",
    "c1_car_num":"",
    "c1_syadai_num":"",
    "c1_katashiki_num":"",
    "c1_classification_num":"",
    "c2_system_id":"",
    "c2_version_num":"",
    "c2_car_num":"",
    "c2_number_plate":"",
    "c2_syadai_num":"",
    "c2_model_engines":"",
    "c2_type_forms":"",
    "c3_system_id":"",
    "c3_version_num":"",
    "c3_shadai_num_stamping_position":"",
    "c3_katashiki_num":"",
    "c3_classification_num":"",
    "c3_validity_period":"",
    "c3_first_year_registration_date":"",
    "c3_katashiki":"",
    "c3_f_f_axle_load":"",
    "c3_f_r_axle_load":"",
    "c3_r_f_axle_load":"",
    "c3_r_r_axle_load":"",
    "c3_noise_regulation":"",
    "c3_proximity_exhaust_noise_limits":"",
    "c3_drive_system":"",
    "c3_measurement_car_opashimeta":"",
    "c3_measurement_mode_nox_pm":"",
    "c3_nox_value":"",
    "c3_pm_value":"",
    "c3_preliminary_item":"",
    "created":"",
    "modified":"",
    "delete_flg":"0",
    "data_type":"0",
    "certificate_car_name":"",
    "use_type":""
  }
;