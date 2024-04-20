import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

import './App.css';
function App() {
	const [code, setCode] = useState('');
	useEffect(() => {
		const fetchCode = async () => {
			try {
				const response = await fetch('/test.jsx');
				const text = await response.text();
				setCode(text);
			} catch (error) {
				console.error('Failed to fetch file:', error);
			}
		};

		fetchCode();
	}, []);
	function handleSave() {
		console.log(code);
		// Or send this data to a server or save it locally
	}
	// console.log(code);
	return (
		<>
			<div style={{ width: '800px', height: '400px' }}>
				<div style={{ textAlign: 'right' }}>
					<button onClick={handleSave}>Save Code</button>
				</div>
				<Editor
					height='400px'
					width='100%'
					theme='vs-dark' // vs-dark, vs-light, hc-black
					defaultLanguage='javascript'
					language='javascript'
					// defaultValue='// some comment'
					value={code}
					options={{
						selectOnLineNumbers: true,
						roundedSelection: false,
						readOnly: false,
						autoIndent: true,
						codeLens: true,
						colorDecorators: true,
						contextmenu: true,
						cursorBlinking: 'blink',
						cursorSmoothCaretAnimation: false,
						overviewRulerBorder: true,
						overviewRulerLanes: 2,
						quickSuggestions: true,
						scrollBeyondLastColumn: 5,
						scrollBeyondLastLine: true,
						smoothScrolling: true,
						wordWrap: 'on',
						wordWrapColumn: 80,
						cursorStyle: 'line',
						automaticLayout: true,
						minimap: { enabled: true },
						lineNumbers: 'on',
						renderWhitespace: 'all',
						autoClosingBrackets: 'always',
						autoClosingQuotes: 'always',
						formatOnType: true,
						tabSize: 4,
						suggestOnTriggerCharacters: true,
						hover: {
							enabled: true,
							delay: 500,
							sticky: true,
						},
						parameterHints: {
							enabled: true,
						},
					}}
					onChange={setCode}
				/>
				<div style={{ textAlign: 'right' }}>
					<button onClick={handleSave}>Save Code</button>
				</div>
			</div>
		</>
	);
}

export default App;
