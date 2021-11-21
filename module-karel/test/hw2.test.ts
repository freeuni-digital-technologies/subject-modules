import { expect } from 'chai'


import {Result, testSubmission} from 'codehskarel-tester'

const testPath = `${process.cwd()}/resources`
const solPath = `${process.cwd()}/test/files`

describe('hw2 test', () => {
	const testFile = `${testPath}/hw2tester.js`
	it('one test should run and it should pass', (done) => {
		testSubmission(testFile, `${solPath}/hw2.k`).then(results => {
			expect(results.every(r=>r.passed)).be.true;
			done()
		})
	})
//    it('in case of a broken file it should report', () => {
//        const [result] = tester.testSubmission(`${path}/broken.k`)
//        expect(result.error).be.true
//        expect(result.message).eql("there is a problem with the file")
//    })
})
