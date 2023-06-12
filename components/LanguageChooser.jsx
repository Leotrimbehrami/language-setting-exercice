import React, { useContext } from "react";
import { LanguageContext } from "../Context";
import "bootstrap/dist/css/bootstrap.min.css";

const LanguageChooser = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Language Setter</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="language-select">Please Select Your Language:</label>
                  <select
                    id="language-select"
                    className="form-control"
                    value={selectedLanguage}
                    onChange={handleChange}
                  >
                    <option value="German">
                        🇩🇪 German
                      </option>
                      <option value="English">
                        🇬🇧 English
                      </option>
                      <option value="Albanian">
                        🇦🇱 Albanian
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageChooser;
