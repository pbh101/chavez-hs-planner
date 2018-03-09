import {expect} from "chai";

import StudentData from "../../../../../src/shared/types/student-data";
import CPSProgram from "../../../../../src/shared/types/cps-program";

import {ifHasGrades} from "../../../../../src/shared/util/req-fn-builders/filters";

describe("ifHasGrades hsReqFilter", () => {

  let s: StudentData;
  let p: CPSProgram;

  beforeEach( () => {
    s = {
      ell: false,
      iep: false,
      gender: 0,
      gradeLevel: 8,
      prevGradeLevel: 7,
      location: {},
      currESProgramID: "",
      siblingHSProgramIDs: [],

      gpa: 0,
      attendancePercentage: 0,
      nweaPercentileMath: 0,
      nweaPercentileRead: 0,
      seTestPercentile: 1,
      subjGradeSci: 0,
      subjGradeMath: 0,
      subjGradeRead: 0,
      subjGradeSocStudies: 0
    };
    p = {} as CPSProgram;
  });

  it("should return true if the student grades are all greater than or equal to the specified grades", () => {
    s.attendancePercentage = 50;
    s.gpa = 2.5;
    s.nweaPercentileMath = 39;
    s.nweaPercentileRead = 40;

    const gradeFilterLessThan = ifHasGrades({
      attendance: 40,
      gpa: 1.0, 
      nweaMath: 24, 
      nweaRead: 24
    });
    const gradeFilterEqual = ifHasGrades({
      attendance: 50, 
      gpa: 2.5, 
      nweaMath: 39, 
      nweaRead: 40
    });
    const gradeFilterGreaterThan = ifHasGrades({
      attendance: 51, 
      gpa: 2.51, 
      nweaMath: 40, 
      nweaRead: 41
    });

    expect(gradeFilterLessThan(s,p)).to.equal(true);
    expect(gradeFilterEqual(s,p)).to.equal(true);
    expect(gradeFilterGreaterThan(s,p)).to.equal(false);
  });

  it("should treat the nweaBoth specified property as though both the nweaMath and nweaRead properties were specified as the same number", () => {
    s.nweaPercentileMath = 40;
    s.nweaPercentileRead = 59;

    const gradeFilterLessThan = ifHasGrades({
      nweaBoth: 24
    });
    const gradeFilterEqual = ifHasGrades({
      nweaBoth: 40 
    });
    const gradeFilterGreaterThan = ifHasGrades({
      nweaBoth: 41 
    });

    expect(gradeFilterLessThan(s,p)).to.equal(true);
    expect(gradeFilterEqual(s,p)).to.equal(true);
    expect(gradeFilterGreaterThan(s,p)).to.equal(false);
  });

  it("should treat the nweaCombined property as though the nweaMath and nweaRead properties were added together to create a combined number", () => {
    s.nweaPercentileMath = 24;
    s.nweaPercentileRead = 24;

    const gradeFilterLessThan = ifHasGrades({
      nweaCombined: 24 
    });
    const gradeFilterEqual = ifHasGrades({
      nweaCombined: 48 
    });
    const gradeFilterGreaterThan = ifHasGrades({
      nweaBoth: 49 
    });

    expect(gradeFilterLessThan(s,p)).to.equal(true);
    expect(gradeFilterEqual(s,p)).to.equal(true);
    expect(gradeFilterGreaterThan(s,p)).to.equal(false);
  });

  it("should return false if any of the student grades are less than or equal to the specified grades", () => {

  });

  it("should return false if any of the properties are undefined on the studentData object", () => {

  });

  it("should throw an error if any combination of the 'nweaBoth', ('nweaMath' or 'nweaRead'), or 'nweaCombined' properties are set in the specified grades", () => {

  });


  it("should throw an error if any of the specified grades have unexpected values", () => {

  });


});
