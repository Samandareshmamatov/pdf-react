import React from "react";

const InnerInputs = ({ childData, setChildData }) => {
  const [hasChild, setHasChild] = React.useState(0);
  const [child1, setChild1] = React.useState({
    childName: "",
    childAge: "",
    childBirth: "",
  });
  const [child2, setChild2] = React.useState({
    childName: "",
    childAge: "",
    childBirth: "",
  });
  const [child3, setChild3] = React.useState({
    childName: "",
    childAge: "",
    childBirth: "",
  });
  React.useEffect(() => {
    setChildData([child1, child2, child3]);
    console.log(childData);
  }, [child1, child2, child3]);

  return (
    <>
      <div className="inputs-block-area">
        <label htmlFor="child" className={`child-green`}>
          Yes
        </label>
        <input
          onClick={() => setHasChild(1)}
          className="child-input child-input1"
          id="child"
          name="children"
          type="radio"
        />
        <label htmlFor="child2" className={`child-red`}>
          No
        </label>
        <input
          onClick={() => setHasChild(0)}
          className={`child-input`}
          defaultChecked
          id="child2"
          name="children"
          type="radio"
        />
        <div className="hidden-inputs">
          <div>
            <label htmlFor="childNum">N of children</label>
            <input
              type="number"
              min={1}
              max={3}
              id="childNum"
              value={hasChild}
              onChange={(e) => setHasChild(Number(e.target.value))}
            />
            {hasChild === 1 ? (
              <div>
                <input
                  type="text"
                  name="childName1"
                  id="childName1"
                  placeholder="Enter first child name"
                  onChange={(e) =>
                    setChild1((p) => {
                      return { ...p, childName: e.target.value };
                    })
                  }
                  value={child1.childName}
                />
                <input
                  type="number"
                  name="age1"
                  id="age1"
                  placeholder="Enter first child age"
                  onChange={(e) =>
                    setChild1((p) => {
                      return { ...p, childAge: e.target.value };
                    })
                  }
                  value={child1.childAge}
                />
                <input
                  type="date"
                  name="birth1"
                  id="birth1"
                  onChange={(e) =>
                    setChild1((p) => {
                      return { ...p, childBirth: e.target.value };
                    })
                  }
                  value={child1.childBirth}
                />
              </div>
            ) : hasChild === 2 ? (
              <>
                <div>
                  <input
                    type="text"
                    name="childName1"
                    id="childName1"
                    placeholder="Enter first child name"
                    onChange={(e) =>
                      setChild1((p) => {
                        return { ...p, childName: e.target.value };
                      })
                    }
                    value={child1.childName}
                  />
                  <input
                    type="number"
                    name="age1"
                    id="age1"
                    placeholder="Enter first child age"
                    onChange={(e) =>
                      setChild1((p) => {
                        return { ...p, childAge: e.target.value };
                      })
                    }
                    value={child1.childAge}
                  />
                  <input
                    type="date"
                    name="birth1"
                    id="birth1"
                    onChange={(e) =>
                      setChild1((p) => {
                        return { ...p, childBirth: e.target.value };
                      })
                    }
                    value={child1.childBirth}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="childName2"
                    id="childName2"
                    placeholder="Enter second child name"
                    value={child2.childName}
                    onChange={(e) =>
                      setChild2((p) => {
                        return { ...p, childName: e.target.value };
                      })
                    }
                  />
                  <input
                    type="number"
                    name="age2"
                    id="age2"
                    onChange={(e) =>
                      setChild2((p) => {
                        return { ...p, childAge: e.target.value };
                      })
                    }
                    value={child2.childAge}
                    placeholder="Enter second child age"
                  />
                  <input
                    type="date"
                    name="birth2"
                    id="birth2"
                    onChange={(e) =>
                      setChild2((p) => {
                        return { ...p, childBirth: e.target.value };
                      })
                    }
                    value={child2.childBirth}
                  />
                </div>
              </>
            ) : hasChild === 3 ? (
              <>
                <div>
                  <input
                    type="text"
                    name="childName1"
                    id="childName1"
                    placeholder="Enter first child name"
                    onChange={(e) =>
                      setChild1((p) => {
                        return { ...p, childName: e.target.value };
                      })
                    }
                    value={child1.childName}
                  />
                  <input
                    type="number"
                    name="age1"
                    id="age1"
                    placeholder="Enter first child age"
                    onChange={(e) =>
                      setChild1((p) => {
                        return { ...p, childAge: e.target.value };
                      })
                    }
                    value={child1.childAge}
                  />
                  <input
                    type="date"
                    name="birth1"
                    id="birth1"
                    onChange={(e) =>
                      setChild1((p) => {
                        return { ...p, childBirth: e.target.value };
                      })
                    }
                    value={child1.childBirth}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="childName2"
                    id="childName2"
                    value={child2.childName}
                    onChange={(e) =>
                      setChild2((p) => {
                        return { ...p, childName: e.target.value };
                      })
                    }
                    placeholder="Enter second child name"
                  />
                  <input
                    type="number"
                    name="age2"
                    onChange={(e) =>
                      setChild2((p) => {
                        return { ...p, childAge: e.target.value };
                      })
                    }
                    value={child2.childAge}
                    id="age2"
                    placeholder="Enter second child age"
                  />
                  <input type="date" name="birth2" id="birth2" />
                </div>
                <div>
                  <input
                    type="text"
                    name="childName3"
                    id="childName3"
                    placeholder="Enter third child name"
                    onChange={(e) =>
                      setChild3((p) => {
                        return { ...p, childName: e.target.value };
                      })
                    }
                    value={child3.childName}
                  />
                  <input
                    type="number"
                    name="age3"
                    onChange={(e) =>
                      setChild3((p) => {
                        return { ...p, childAge: e.target.value };
                      })
                    }
                    value={child3.childAge}
                    id="age3"
                    placeholder="Enter third child age"
                  />
                  <input
                    type="date"
                    name="birth3"
                    id="birth3"
                    onChange={(e) =>
                      setChild3((p) => {
                        return { ...p, childBirth: e.target.value };
                      })
                    }
                    value={child3.childBirth}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerInputs;
