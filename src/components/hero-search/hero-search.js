import "./hero-search.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import useMarvelService from "../../services/MarvelService";
import { useEffect, useState } from "react";

const HeroSearch = () => {
  const { getCharacterByName } = useMarvelService();
  const [errorMessage, setErrorMessage] = useState("");
  const [heroId, setHeroId] = useState("");
  const [errorMessageClass, setErrorMessageClass] = useState("");
  const [heroPageBtn, setHeroPageBtn] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue === "") {
      setErrorMessage("");
      setErrorMessageClass("");
      setHeroId("");
      setHeroPageBtn(false);
    }
  }, [inputValue]);

  return (
    <div className="heroes__info">
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "minimum 2 symbols")
            .required("This field is required"),
        })}
        onSubmit={(value, { setSubmitting }) =>
          getCharacterByName(value.name)
            .then((heroData) => {
              if (heroData) {
                setErrorMessage(`There is! Visit ${value.name} page?`);
                setErrorMessageClass("confirmed");
                setHeroId(heroData.id);
                setHeroPageBtn(true);
              } else {
                setErrorMessage(
                  "The character was not found. Check the name and try again."
                );
                setErrorMessageClass("");
                setHeroId("");
                setHeroPageBtn(false);
              }
            })
            .catch(() => {
              setErrorMessage("An error occurred. Please try again later.");
            })
            .finally(() => {
              setSubmitting(false);
            })
        }
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form className="heroes__form">
            <h2 className="heroes__search">Or find a character by name:</h2>
            <div className="heroes__search-field">
              <label htmlFor="name">
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={(e) => {
                    handleChange(e);
                    setInputValue(e.target.value);
                  }}
                />
              </label>
              <button
                className="btn btn-red"
                type="submit"
                disabled={isSubmitting}
              >
                Find
              </button>
            </div>
            <div className="heroes__search-bottom">
              {errorMessage && (
                <div className={`heroes__error ${errorMessageClass}`}>
                  {errorMessage}
                </div>
              )}
              <ErrorMessage
                className="heroes__error"
                name="name"
                component="div"
              />
              {heroPageBtn ? (
                <NavLink className="btn btn--grey" to={`/hero/${heroId}`}>
                  To Page
                </NavLink>
              ) : null}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HeroSearch;
