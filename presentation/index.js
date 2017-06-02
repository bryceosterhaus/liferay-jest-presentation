// Import React
import React from "react";

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Markdown,
	Cite,
	Deck,
	Code,
	CodePane,
	Heading,
	ListItem,
	List,
	Layout,
	Fill,
	Fit,
	Image,
	Quote,
	Slide,
	S,
	Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import ImageSlide from 'spectacle-image-slide';



// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
	testPyramidActual: require("../assets/test_pyramid_actual.png"),
	testPyramidIdeal: require("../assets/test_pyramid_ideal.png"),
	pullRequest: require("../assets/pull-request.png"),
	jest: require("../assets/jest.svg"),
	emojiSearchFail1: require("../assets/emojiSearchFail1.png"),
	emojiSearchFail2: require("../assets/emojiSearchFail2.png"),
	emojiSearchPass: require("../assets/emojiSearchPass.png"),
	emojiSearchPass2: require("../assets/emojiSearchPass2.png"),
	emojiSearchSnapshot1: require("../assets/emojiSearchSnapshot1.png"),
	emojiSearchSnapshot2: require("../assets/emojiSearchSnapshot2.png"),
	emojiSearchSnapshot3: require("../assets/emojiSearchSnapshot3.png"),
	failedSnapshots: require("../assets/failedSnapshots.png"),
	passedSnapshots: require("../assets/passedSnapshots.png"),
	flow1: require("../assets/flow1.png"),
	flow2: require("../assets/flow2.png"),
	flow3: require("../assets/flow3.png"),
	flow4: require("../assets/flow4.png"),
	coverageTerminal: require("../assets/coverageTerminal.png"),
};

preloader(images);

const theme = createTheme({
	primary: "white",
	secondary: "#51555f",
	background: "#40697d",
	success: "#5ffa68",
	fail: "#ff6e67",
	code: "#21252b"
}, {
	primary: "Montserrat",
	secondary: "Helvetica"
});

export default class Presentation extends React.Component {
	render() {
	return (
		<Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
			<Slide maxWidth="1200px" transition={["zoom"]} bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="background">
					Making tests great again
				</Heading>
				<br />
				<Text margin="10px 0 0" textColor="secondary" size={4} fit bold>
					Why Jest solves every problem you’ll ever have…
					<br />
					(not really, but it’s still pretty cool.)
				</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="Preface:<br/> some unfair comparisons due to the switch from<br/> yui -> react<br/> es5 -> es6"
			>
				<Heading size={6} textColor="primary">https://liferay-jest.now.sh</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary"
				notes="ideal world, tests are supposed to be great"
			>
				<ImageSlide image={images.testPyramidIdeal} />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary"
				notes="Testing romanticism"
			>
				<Appear>
					<Text textColor="success">😍 Green tests everywhere!</Text>
				</Appear>
				<br />
				<Appear>
					<Text textColor="success">🤓 So many regressions caught!</Text>
				</Appear>
				<br />
				<Appear>
					<Text textColor="success">⭐️ Perfect functional code!</Text>
				</Appear>
				<br />
				<Appear>
					<Text textColor="success">🕺 So easy to write tests!</Text>
				</Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary"
				notes="functional tests were great, but flakey an didn't catch everything<br/><br/>only 80?? why?"
			>
				<Heading size={4} textColor="primary" caps>Loop</Heading>
				<Text textColor="primary">
					Functional Tests: <Appear><S textColor="success" type="bold">790</S></Appear>
					<br />
					Unit Tests: <Appear><S textColor="fail" type="bold">80</S></Appear>
				</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>unit testing sucks</Heading>

				<Appear><Text textColor="primary">Too many dependencies</Text></Appear>
				<Appear><Text textColor="primary">Config nightmare</Text></Appear>
				<Appear><Text textColor="primary">Too complex</Text></Appear>
				<Appear><Text textColor="primary">Not getting any benefit</Text></Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="too to handle<br/><br/>writing applications already requires too much to worry about"
			>
				<Heading size={4} textColor="primary" caps>Dependencies</Heading>

				<Appear><Text textColor="primary">Test Runner (Karma)</Text></Appear>
				<Appear><Text textColor="primary">Test Framework (Mocha)</Text></Appear>
				<Appear><Text textColor="primary">Assertion Library (Chai)</Text></Appear>
				<Appear><Text textColor="primary">Mocking Library (sinon)</Text></Appear>
				<Appear><Text textColor="primary">Coverage Reporter (istanbul)</Text></Appear>
				<Appear><Text textColor="primary">Utilities (async, watch mode, etc.)</Text></Appear>
			</Slide>

			<Slide maxWidth="1200px" align="flex-start flex-start" transition={["fade"]} bgColor="background"
				notes="not a 'set it and forget it'"
			>
				<Heading size={4} textColor="primary" caps>Configuration</Heading>

				<Appear>
					<CodePane
						lang="js"
						source={require("raw-loader!../assets/karmaConfig.example")}
					/>
				</Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>
					<a href="https://github.com/airbnb/react-dates/blob/master/karma.conf.js" target="_blank">
						Airbnb
					</a>
					<br/>
					<a href="https://github.com/angular/angular.js" target="_blank">
						Angular
					</a>
				</Heading>
			</Slide>

			<CodeSlide
				notes="loop example"
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/karma1.example")}
				textSize={24}
				ranges={[
					{loc: [0, 24], title: "Test Case"},
					{loc: [3, 13]},
					{loc: [14, 22]},
				]}
			/>

			<CodeSlide
				notes="too much to remember<br/>too much to setup<br/>very little pay off"
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/karma2.example")}
				textSize={24}
				ranges={[
					{loc: [0, 31], title: "Test Case"},
					{loc: [3, 4]},
					{loc: [5, 6]},
					{loc: [7, 21]},
					{loc: [22, 27]},
					{loc: [28, 29]},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="We didn't experience these things"
			>
				<Heading size={4} textColor="primary" caps>Tests are supposed help</Heading>
				<br />
				<Text textColor="primary">Catch regressions</Text>
				<Text textColor="primary">Improve Code Quality</Text>
				<Text textColor="primary">Reproducing bugs</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary"
				notes="Conclusion?"
			>
				<Heading size={4} textColor="fail" caps>too much effort</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="IDEAL: low effort === more tests === more benefit"
			>
				<Heading size={4} textColor="primary" caps>
					more effort => <S type="bold" textColor="fail">less tests</S>
				</Heading>
				<br />
				<Appear>
					<Heading size={4} textColor="primary" caps>
						less tests => <S type="bold" textColor="fail">less benefit</S>
					</Heading>
				</Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<Heading size={4} textColor="primary" caps>How do we fix this?</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="how did we find jest?<br/>react<br/>es6<br/><br/>already switching, might as well try something new"
			>
				<Heading size={3} textColor="primary" caps>Jest</Heading>

				<Image src={images.jest} height="160px" />

				<Heading size={6} textColor="primary" caps>Painless JavaScript Testing</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="how does jest help us?"
			>
				<Heading size={4} textColor="success" caps>Reduces Effort</Heading>

				<Text textColor="primary"><S type="strikethrough">Too many dependencies</S></Text>
				<Text textColor="primary"><S type="strikethrough">Config nightmare</S></Text>
				<Text textColor="primary"><S type="strikethrough">Too complex</S></Text>
				<Text textColor="primary"><S type="strikethrough">Not getting any benefit</S></Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="less to worry about"
			>
				<Heading size={4} textColor="primary" caps>less dependencies</Heading>

				<Text textColor="primary">
					<S type="strikethrough">Karma</S>
					<br />
					<S type="strikethrough">Mocha</S>
					<br />
					<S type="strikethrough">Chai</S>
					<br />
					<S type="strikethrough">sinon</S>
					<br />
					<S type="strikethrough">istanbul</S>
					<br />
					<S type="strikethrough">karma plugins</S>
				</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="all inclusive, one single worry"
			>
				<Heading size={4} textColor="primary" caps>All inclusive</Heading>
				<br />

				<Text textColor="primary">
					<Appear><S textColor="success" type="bold">✓</S></Appear> Test Runner
					<br />
					<Appear><S textColor="success" type="bold">✓</S></Appear> Test Framework
					<br />
					<Appear><S textColor="success" type="bold">✓</S></Appear> Assertion Library
					<br />
					<Appear><S textColor="success" type="bold">✓</S></Appear> Mocking Library
					<br />
					<Appear><S textColor="success" type="bold">✓</S></Appear> Coverage Reporter
					<br />
					<Appear><S textColor="success" type="bold">✓</S></Appear> Utilities (snapshots, async, watch mode)
				</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>What happened in Loop?</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>before</Heading>
				<br />
				<Text textColor="primary">
					<div><S textColor="fail" type="bold">0.3</S> tests/day</div>
					<S textColor="fail" type="bold">80</S> total
				</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>after</Heading>
				<br />
				<Text textColor="primary">
					<div><S textColor="success" type="bold">1.85</S> tests/day</div>
					<span><S textColor="success" type="bold">875</S> total</span>
				</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>
					<S textColor="success" type="bold">600%</S> increase
				</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background"
				notes="expand on why it just works<br/><br/>transition to how to use jest"
				>
				<Heading size={4} textColor="primary" caps>Why the increase?</Heading>

				<Appear><Heading size={4} textColor="primary" caps>
					<S textColor="success" type="bold">it just works</S>
				</Heading></Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>Using Jest</Heading>
			</Slide>

			<Slide maxWidth="1200px" align="flex-start flex-start" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>Karma Config</Heading>

				<CodePane
					lang="js"
					source={require("raw-loader!../assets/karmaConfig.example")}
				/>
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/jestConfig.example")}
				textSize={24}
				ranges={[
					{loc: [0, 11], title: "Jest Config"}
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" notes="install<br/>run tests<br/>helpful flags">
				<Heading size={4} textColor="primary" caps>Jest CLI</Heading>

				<Terminal
					title="~(zsh)"
					output={[
						"$ npm i -g jest",
						"...",
						"$ jest",
						"...",
						"$ jest -o",
						"...",
						"$ jest --watch",
						"...",
						"$ jest my-test",
						"...",
						"$ jest --lastCommit",
						"...",
						<div style={{ color: "#FFFFFF"}}>
							<div>Test Suites: <span style={{ color: "#5ffa68"}}>213 passed</span>, 213 total</div>

							<div>Tests:       <span style={{ color: "#5ffa68"}}>875 passed</span>, 875 total</div>

							<div>Snapshots:   <span style={{ color: "#5ffa68"}}>198 passed</span>, 198 total</div>

							<div>Time:        <span style={{ color: "#fffc67"}}>16.793s</span></div>
						</div>
					]}
				/>
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/jestFramework1.example")}
				textSize={24}
				ranges={[
					{loc: [0, 8], title: "Anatomy of a test"},
					{loc: [1, 2], note: "module you are testing"},
					{loc: [3, 8], note: "test suite"},
					{loc: [4, 7], note: "test case"},
				]}
			/>

			<CodeSlide
				notes="so many more available.<br/>check documentation site"
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/jestFramework2.example")}
				textSize={24}
				ranges={[
					{loc: [0, 11], title: "Assertions"},
					{loc: [4, 9]}
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/asyncSupport.example")}
				textSize={24}
				ranges={[
					{loc: [0, 0], title: "Async Support"},
					{loc: [0, 5]},
					{loc: [7, 16]},
					{loc: [18, 29]}
				]}
			/>

			<CodeSlide
				notes="what is mocking?<br/>why is mocking useful?<br/>testing in isolation"
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/jestFramework3.example")}
				textSize={24}
				ranges={[
					{loc: [0, 0], title: "Mocking"},
					{loc: [0, 1], note: "creating a mock function"},
					{loc: [2, 5], note: "asserting if a mock is called"},
					{loc: [8, 11], note: "mock with return value"},
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/jestFramework4.example")}
				textSize={24}
				ranges={[
					{loc: [0, 0], title: "Mocking Modules"},
					{loc: [1, 10]},
					{loc: [13, 23]},
					{loc: [13, 14]},
					{loc: [15, 16]},
					{loc: [16, 17]},
					{loc: [18, 19]},
					{loc: [20, 23]},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary" notes="why is coverage useful?">
				<ImageSlide image={images.coverageTerminal} title="Coverage" titleProps={{size: 4, textColor: "primary", caps: true}} />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" notes="real use case example">
				<Text textColor="primary" size={1}>
					emojiSearch(query) => []
				</Text>
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/emojiSearchTest1.example")}
				textSize={24}
				ranges={[
					{loc: [0, 5], title: "Testing emojiSearch()"},
					{loc: [0, 1], note: "Declare test case"},
					{loc: [1, 2]},
					{loc: [3, 4], note: "What do we expect?"},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Image src={images.emojiSearchFail1} height="300px" width="1200px" />
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/emojiSearchTest2.example")}
				textSize={24}
				ranges={[
					{loc: [4, 8], title: "Paste value"},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Image src={images.emojiSearchPass} height="300px" width="1000px" />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" notes="new version comes out, changing descriptions">
				<Heading size={4} textColor="primary" caps>emojiSearch 2.0</Heading>
				<br />
				<Appear>
					<Text textColor="primary">
						"praise hands" => "raise the roof hands"
					</Text>
				</Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Image src={images.emojiSearchFail2} height="300px" width="1200px" />
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/emojiSearchTest4.example")}
				textSize={24}
				ranges={[
					{loc: [4, 8], title: "Paste value"},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Image src={images.emojiSearchPass2} width="1000px" />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>The Cycle</Heading>
				<br />
				<br />
				<br />
				<Text textColor="primary" size={1}>
					<S textColor="fail" type="bold">Failed Test</S>
					{` => Copy => Paste => `}
					<S textColor="success" type="bold">Passed Test</S>
				</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<Heading size={4} textColor="primary" caps>thats not too annoying</Heading>
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/className1.example")}
				textSize={24}
				ranges={[
					{loc: [0, 3], title: "icon-container"},
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/className2.example")}
				textSize={24}
				ranges={[
					{loc: [0, 3], title: "container -> wrapper"}
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<Heading size={4} textColor="primary" caps>Too many manual updates</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<Heading size={4} textColor="primary" caps>Snapshots 📸 ⚡️</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Image src={images.failedSnapshots} width="1000px" />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Image src={images.passedSnapshots} width="1000px" />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={6} textColor="primary">expect(value).toEqual(...)</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={6} textColor="primary">expect(value)<S textColor="#aaaaff" type="bold">.toMatchSnapShot()</S></Heading>
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/emojiSearchTest3.example")}
				textSize={24}
				ranges={[
					{loc: [0, 5], title: "Using Snapshots"},
					{loc: [3, 4]},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<ImageSlide image={images.emojiSearchSnapshot1} />
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/emojiSearchSnapshot1.example")}
				textSize={24}
				ranges={[
					{loc: [0, 14], title: "Snapshot File"},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" notes="changing descriptions">
				<Heading size={4} textColor="primary" caps>emojiSearch 2.0</Heading>
				<br />
				<Text textColor="primary">
					"praise hands" => "raise the roof hands"
				</Text>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<ImageSlide image={images.emojiSearchSnapshot2} />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<ImageSlide image={images.emojiSearchSnapshot3} />
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/emojiSearchSnapshot2.example")}
				textSize={24}
				ranges={[
					{loc: [0, 14], title: "Snapshot File"},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<ImageSlide image={images.flow1} />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<ImageSlide image={images.flow2} />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<ImageSlide image={images.flow3} />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background" textColor="primary">
				<ImageSlide image={images.flow4} />
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>What about testing Metal components?</Heading>
			</Slide>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="jsx"
				code={require("raw-loader!../assets/metalApp1.example")}
				textSize={24}
				ranges={[
					{loc: [0, 9], title: "Simple List"},
					{loc: [0, 1]},
					{loc: [1, 8]},
					{loc: [1, 2]},
					{loc: [3, 8]},
					{loc: [4, 5]},
					{loc: [5, 6]},
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="jsx"
				code={require("raw-loader!../assets/metalApp2.example")}
				textSize={24}
				ranges={[
					{loc: [0, 7], title: "ListItem Component"},
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="jsx"
				code={require("raw-loader!../assets/metalApp3.example")}
				textSize={24}
				ranges={[
					{loc: [0, 5], title: "ListItem Test"},
					{loc: [9, 14], note: "Using metal-jest-serializer"},
					{loc: [18, 23]},
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/metalAppSnapshot1.example")}
				textSize={24}
				ranges={[
					{loc: [0, 7], title: "Snapshot File"},
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="jsx"
				code={require("raw-loader!../assets/metalApp4.example")}
				textSize={24}
				ranges={[
					{loc: [0, 0], title: "App Component"},
					{loc: [21, 38]},
					{loc: [9, 20]},
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="jsx"
				code={require("raw-loader!../assets/metalApp5.example")}
				textSize={24}
				ranges={[
					{loc: [0, 0], title: "App Test"},
					{loc: [0, 5]},
					{loc: [9, 18]},
					{loc: [12, 13]},
					{loc: [14, 15], note: 'Metal.js has async updates'},
					{loc: [9, 18]},
					{loc: [22, 35]},
					{loc: [23, 24]},
					{loc: [25, 26]},
					{loc: [27, 28]},
					{loc: [29, 30]},
					{loc: [31, 32]},
					{loc: [33, 34]},
				]}
			/>

			<CodeSlide
				bgColor="code"
				transition={["fade"]}
				lang="js"
				code={require("raw-loader!../assets/metalAppSnapshot2.example")}
				textSize={24}
				ranges={[
					{loc: [0, 0], title: "Snapshot File"},
					{loc: [24, 31]},
					{loc: [12, 23]},
					{loc: [2, 11]},
				]}
			/>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>Loop Tests Demo</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>Why is Jest great?</Heading>

				<Appear>
					<Text textColor="primary">All inclusive</Text>
				</Appear>
				<Appear>
					<Text textColor="primary">It just works</Text>
				</Appear>
				<Appear>
					<Text textColor="primary">Snapshot testing</Text>
				</Appear>
				<Appear>
					<Text textColor="primary">Actively developed</Text>
				</Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="success" caps>requires less effort</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>Drawbacks?</Heading>
				<Appear><Text textColor="primary">Can't test in specific browsers</Text></Appear>
				<Appear><Text textColor="primary">All in one</Text></Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>What about Loop now?</Heading>
				<Appear><Text textColor="primary">Writing tests is easier</Text></Appear>
				<Appear><Text textColor="primary">Doesn't take much effort</Text></Appear>
				<Appear><Text textColor="primary">Seeing actual benefits</Text></Appear>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={5} textColor="primary" caps>
					using Jest => <S type="bold" textColor="success">better experience</S>
				</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={1} textColor="primary" caps>Q & A</Heading>
			</Slide>

			<Slide maxWidth="1200px" transition={["fade"]} bgColor="background">
				<Heading size={4} textColor="primary" caps>Resources:</Heading>

				<Text textColor="primary">
					<a href="https://facebook.github.io/jest/">Jest Site</a>
					<br />
					<a href="https://github.com/facebook/jest">Jest Github</a>
					<br />
					<a href="https://youtu.be/HAuXJVI_bUs">Snapshots Talk</a>
					<br />
					<a href="https://egghead.io/lessons/javascript-test-javascript-with-jest">Jest Tutorial</a>
					<br />
					<a href="https://github.com/metal/metal-jest-serializer">metal-jest-serializer</a>
				</Text>
			</Slide>
		</Deck>
	);
	}
}
