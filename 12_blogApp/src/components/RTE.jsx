import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Controller } from 'react-hook-form'

// Custom SVG Icons
const Icons = {
  Bold: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
    </svg>
  ),
  Italic: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="4" x2="10" y2="4"></line>
      <line x1="14" y1="20" x2="5" y2="20"></line>
      <line x1="15" y1="4" x2="9" y2="20"></line>
    </svg>
  ),
  Underline: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
      <line x1="4" y1="21" x2="20" y2="21"></line>
    </svg>
  ),
  Strike: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
      <path d="M14 12a4 4 0 0 1 0 8H6"></path>
      <line x1="4" y1="12" x2="20" y2="12"></line>
    </svg>
  ),
  AlignLeft: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="17" y1="10" x2="3" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="17" y1="18" x2="3" y2="18"></line>
    </svg>
  ),
  AlignCenter: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="10" x2="6" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="18" y1="18" x2="6" y2="18"></line>
    </svg>
  ),
  AlignRight: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="21" y1="10" x2="7" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="21" y1="18" x2="7" y2="18"></line>
    </svg>
  ),
  AlignJustify: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="10" x2="3" y2="10"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="21" y1="18" x2="3" y2="18"></line>
    </svg>
  ),
  BulletList: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  ),
  OrderedList: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" y1="6" x2="21" y2="6"></line>
      <line x1="10" y1="12" x2="21" y2="12"></line>
      <line x1="10" y1="18" x2="21" y2="18"></line>
      <path d="M4 6h1v4"></path>
      <path d="M4 10h2"></path>
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
    </svg>
  ),
  Quote: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
    </svg>
  ),
  Link: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  ),
  Unlink: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M5.16 11.75l-1.72 1.71a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      <line x1="2" y1="2" x2="22" y2="22"></line>
    </svg>
  ),
  HorizontalRule: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
    </svg>
  ),
  Eraser: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path>
      <path d="M22 21H7"></path>
      <path d="m5 11 9 9"></path>
    </svg>
  ),
  Undo: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10"></polyline>
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
    </svg>
  ),
  Redo: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
    </svg>
  ),
  TextColor: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16"></path>
      <path d="m6 16 6-12 6 12"></path>
      <path d="M8 12h8"></path>
    </svg>
  ),
  Highlighter: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 11-6 6v3h3l6-6"></path>
      <path d="m22 2-2.7 2.7a2.5 2.5 0 0 1-3.5 0l-.8-.8a2.5 2.5 0 0 1 0-3.5L17.7.7a2.5 2.5 0 0 1 3.5 0l.8.8a2.5 2.5 0 0 1 0 3.5Z"></path>
      <path d="m14 6 4 4"></path>
    </svg>
  ),
  HtmlCode: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 8 3 12 7 16"></polyline>
      <polyline points="17 8 21 12 17 16"></polyline>
      <line x1="14" y1="4" x2="10" y2="20"></line>
    </svg>
  ),
}

const COLOR_PALETTE = [
  '#000000', '#374151', '#6b7280', '#dc2626', '#ea580c',
  '#d97706', '#16a34a', '#059669', '#0284c7', '#2563eb',
  '#7c3aed', '#db2777'
]

const HIGHLIGHT_PALETTE = [
  'transparent', '#fef08a', '#bbf7d0', '#bae6fd', '#ddd6fe', '#fbcfe8', '#fed7aa'
]

function RichEditor({ value = '', onChange }) {
  const editorRef = useRef(null)
  const savedSelectionRef = useRef(null)
  const [activeFormats, setActiveFormats] = useState({})
  const [activeBlock, setActiveBlock] = useState('p')
  const [isHtmlMode, setIsHtmlMode] = useState(false)
  const [htmlSource, setHtmlSource] = useState(value || '')
  const [textColor, setTextColor] = useState('#000000')
  const [highlightColor, setHighlightColor] = useState('transparent')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showHighlightPicker, setShowHighlightPicker] = useState(false)
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [linkText, setLinkText] = useState('')
  const [stats, setStats] = useState({ words: 0, chars: 0 })

  const updateStats = (text) => {
    const cleanText = (text || '').trim()
    const words = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0
    const chars = cleanText.length
    setStats({ words, chars })
  }

  // Initialize or update editor content only when not currently focused by typing
  useEffect(() => {
    if (editorRef.current && !isHtmlMode) {
      const isFocused = document.activeElement === editorRef.current
      if (!isFocused && editorRef.current.innerHTML !== (value || '')) {
        editorRef.current.innerHTML = value || ''
        updateStats(editorRef.current.innerText || '')
      }
    }
  }, [value, isHtmlMode])

  // Save selection before opening menus or modals
  const saveSelection = () => {
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0) {
      savedSelectionRef.current = sel.getRangeAt(0).cloneRange()
    }
  }

  // Restore saved selection
  const restoreSelection = () => {
    const sel = window.getSelection()
    if (savedSelectionRef.current && sel) {
      sel.removeAllRanges()
      sel.addRange(savedSelectionRef.current)
    }
  }

  // Detect active formatting on cursor movement / selection
  const checkActiveFormats = useCallback(() => {
    if (isHtmlMode || !editorRef.current) return

    try {
      setActiveFormats({
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        underline: document.queryCommandState('underline'),
        strikeThrough: document.queryCommandState('strikeThrough'),
        justifyLeft: document.queryCommandState('justifyLeft'),
        justifyCenter: document.queryCommandState('justifyCenter'),
        justifyRight: document.queryCommandState('justifyRight'),
        justifyFull: document.queryCommandState('justifyFull'),
        insertUnorderedList: document.queryCommandState('insertUnorderedList'),
        insertOrderedList: document.queryCommandState('insertOrderedList'),
      })

      const block = document.queryCommandValue('formatBlock') || 'p'
      setActiveBlock(block.toLowerCase().replace(/[<>]/g, ''))
    } catch {
      // Ignore queryCommand errors if element not focused
    }

    if (editorRef.current) {
      updateStats(editorRef.current.innerText || '')
    }
  }, [isHtmlMode])

  // Execute standard formatting commands
  const executeCommand = (command, valueArg = null) => {
    if (isHtmlMode) return
    editorRef.current?.focus()
    document.execCommand(command, false, valueArg)
    handleEditorInput()
    checkActiveFormats()
  }

  // Handle input event in contentEditable
  const handleEditorInput = () => {
    if (!editorRef.current) return
    const content = editorRef.current.innerHTML
    updateStats(editorRef.current.innerText || '')
    onChange(content)
  }

  // Handle font/block selection (h1, h2, h3, p, etc.)
  const handleBlockChange = (e) => {
    const tag = e.target.value
    setActiveBlock(tag)
    if (tag === 'pre') {
      executeCommand('formatBlock', '<pre>')
    } else if (tag === 'blockquote') {
      executeCommand('formatBlock', '<blockquote>')
    } else {
      executeCommand('formatBlock', `<${tag}>`)
    }
  }

  // Color picker action
  const handleApplyColor = (color) => {
    restoreSelection()
    setTextColor(color)
    executeCommand('foreColor', color)
    setShowColorPicker(false)
  }

  // Highlight color action
  const handleApplyHighlight = (color) => {
    restoreSelection()
    setHighlightColor(color)
    executeCommand('hiliteColor', color)
    setShowHighlightPicker(false)
  }

  // Open Link Modal
  const handleOpenLinkModal = () => {
    saveSelection()
    const sel = window.getSelection()
    const selected = sel ? sel.toString() : ''
    setLinkText(selected)
    setLinkUrl('')
    setShowLinkModal(true)
  }

  // Apply Link
  const handleInsertLink = (e) => {
    e.preventDefault()
    if (!linkUrl) return
    restoreSelection()
    
    let formattedUrl = linkUrl
    if (!/^https?:\/\//i.test(formattedUrl) && !/^mailto:/i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl
    }

    if (linkText && savedSelectionRef.current && savedSelectionRef.current.collapsed) {
      const linkHtml = `<a href="${formattedUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-medium">${linkText}</a>`
      document.execCommand('insertHTML', false, linkHtml)
    } else {
      document.execCommand('createLink', false, formattedUrl)
    }

    setShowLinkModal(false)
    handleEditorInput()
  }

  // Remove Link
  const handleUnlink = () => {
    executeCommand('unlink')
  }

  // Clear Formatting
  const handleClearFormat = () => {
    executeCommand('removeFormat')
    executeCommand('formatBlock', '<p>')
  }

  // Toggle HTML Code View
  const handleToggleHtmlMode = () => {
    if (!isHtmlMode) {
      setHtmlSource(editorRef.current ? editorRef.current.innerHTML : '')
      setIsHtmlMode(true)
    } else {
      setIsHtmlMode(false)
      onChange(htmlSource)
      if (editorRef.current) {
        editorRef.current.innerHTML = htmlSource
      }
    }
  }

  // Handle HTML Code Change
  const handleHtmlSourceChange = (e) => {
    const val = e.target.value
    setHtmlSource(val)
    onChange(val)
    updateStats(val.replace(/<[^>]*>/g, ''))
  }

  return (
    <div className="w-full border border-slate-300 rounded-xl bg-white shadow-sm overflow-hidden flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
      
      {/* TOOLBAR */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-50 border-b border-slate-200 select-none text-slate-700">
        
        {/* Undo / Redo */}
        <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
          <button
            type="button"
            title="Undo (Ctrl+Z)"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('undo') }}
            className="p-1.5 hover:bg-slate-100 disabled:opacity-40 rounded-md transition-colors"
          >
            <Icons.Undo />
          </button>
          <button
            type="button"
            title="Redo (Ctrl+Y)"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('redo') }}
            className="p-1.5 hover:bg-slate-100 disabled:opacity-40 rounded-md transition-colors"
          >
            <Icons.Redo />
          </button>
        </div>

        <div className="h-5 w-px bg-slate-300 mx-0.5" />

        {/* Headings / Block Types Dropdown */}
        <select
          value={activeBlock}
          disabled={isHtmlMode}
          onChange={handleBlockChange}
          className="text-xs font-semibold px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg shadow-2xs hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer text-slate-800 disabled:opacity-40"
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="blockquote">Blockquote</option>
          <option value="pre">Code Block</option>
        </select>

        <div className="h-5 w-px bg-slate-300 mx-0.5" />

        {/* Inline Formatting: Bold, Italic, Underline, Strikethrough */}
        <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
          <button
            type="button"
            title="Bold (Ctrl+B)"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('bold') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.bold ? 'bg-blue-100 text-blue-700 font-bold' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.Bold />
          </button>
          <button
            type="button"
            title="Italic (Ctrl+I)"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('italic') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.italic ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.Italic />
          </button>
          <button
            type="button"
            title="Underline (Ctrl+U)"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('underline') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.underline ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.Underline />
          </button>
          <button
            type="button"
            title="Strikethrough"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('strikeThrough') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.strikeThrough ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.Strike />
          </button>
        </div>

        <div className="h-5 w-px bg-slate-300 mx-0.5" />

        {/* Text Color & Highlight Color */}
        <div className="relative flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
          {/* Text Color Button */}
          <div className="relative">
            <button
              type="button"
              title="Text Color"
              disabled={isHtmlMode}
              onClick={() => {
                saveSelection()
                setShowColorPicker(!showColorPicker)
                setShowHighlightPicker(false)
              }}
              className="p-1.5 hover:bg-slate-100 rounded-md transition-colors flex flex-col items-center disabled:opacity-40"
            >
              <Icons.TextColor />
              <span className="w-3.5 h-0.5 rounded-full mt-0.5" style={{ backgroundColor: textColor }} />
            </button>

            {showColorPicker && (
              <div className="absolute top-full mt-1 left-0 z-50 bg-white border border-slate-200 rounded-xl shadow-xl p-2.5 w-44 grid grid-cols-4 gap-1.5">
                <div className="col-span-4 text-[11px] font-semibold text-slate-500 mb-1 px-1">Text Color</div>
                {COLOR_PALETTE.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleApplyColor(c)}
                    className="w-7 h-7 rounded-md border border-slate-200 hover:scale-110 transition-transform shadow-2xs"
                    style={{ backgroundColor: c }}
                  />
                ))}
                <div className="col-span-4 mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">Custom:</span>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => handleApplyColor(e.target.value)}
                    className="w-6 h-6 p-0 border-0 rounded cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Highlight Color Button */}
          <div className="relative">
            <button
              type="button"
              title="Highlight Color"
              disabled={isHtmlMode}
              onClick={() => {
                saveSelection()
                setShowHighlightPicker(!showHighlightPicker)
                setShowColorPicker(false)
              }}
              className="p-1.5 hover:bg-slate-100 rounded-md transition-colors flex flex-col items-center disabled:opacity-40"
            >
              <Icons.Highlighter />
              <span className="w-3.5 h-0.5 rounded-full mt-0.5" style={{ backgroundColor: highlightColor === 'transparent' ? '#cbd5e1' : highlightColor }} />
            </button>

            {showHighlightPicker && (
              <div className="absolute top-full mt-1 left-0 z-50 bg-white border border-slate-200 rounded-xl shadow-xl p-2.5 w-44 grid grid-cols-4 gap-1.5">
                <div className="col-span-4 text-[11px] font-semibold text-slate-500 mb-1 px-1">Highlight</div>
                {HIGHLIGHT_PALETTE.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleApplyHighlight(c)}
                    className="w-7 h-7 rounded-md border border-slate-200 hover:scale-110 transition-transform shadow-2xs flex items-center justify-center text-xs text-slate-600"
                    style={{ backgroundColor: c }}
                  >
                    {c === 'transparent' ? '✕' : ''}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="h-5 w-px bg-slate-300 mx-0.5" />

        {/* Alignment Controls */}
        <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
          <button
            type="button"
            title="Align Left"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('justifyLeft') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.justifyLeft ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.AlignLeft />
          </button>
          <button
            type="button"
            title="Align Center"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('justifyCenter') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.justifyCenter ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.AlignCenter />
          </button>
          <button
            type="button"
            title="Align Right"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('justifyRight') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.justifyRight ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.AlignRight />
          </button>
          <button
            type="button"
            title="Justify"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('justifyFull') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.justifyFull ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.AlignJustify />
          </button>
        </div>

        <div className="h-5 w-px bg-slate-300 mx-0.5" />

        {/* Lists & Horizontal Rule */}
        <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
          <button
            type="button"
            title="Bullet List"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('insertUnorderedList') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.insertUnorderedList ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.BulletList />
          </button>
          <button
            type="button"
            title="Numbered List"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('insertOrderedList') }}
            className={`p-1.5 rounded-md transition-colors ${activeFormats.insertOrderedList ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-700'} disabled:opacity-40`}
          >
            <Icons.OrderedList />
          </button>
          <button
            type="button"
            title="Horizontal Divider"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); executeCommand('insertHorizontalRule') }}
            className="p-1.5 hover:bg-slate-100 text-slate-700 rounded-md transition-colors disabled:opacity-40"
          >
            <Icons.HorizontalRule />
          </button>
        </div>

        <div className="h-5 w-px bg-slate-300 mx-0.5" />

        {/* Link / Unlink */}
        <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
          <button
            type="button"
            title="Insert Link"
            disabled={isHtmlMode}
            onClick={handleOpenLinkModal}
            className="p-1.5 hover:bg-slate-100 text-slate-700 rounded-md transition-colors disabled:opacity-40"
          >
            <Icons.Link />
          </button>
          <button
            type="button"
            title="Remove Link"
            disabled={isHtmlMode}
            onMouseDown={(e) => { e.preventDefault(); handleUnlink() }}
            className="p-1.5 hover:bg-slate-100 text-slate-700 rounded-md transition-colors disabled:opacity-40"
          >
            <Icons.Unlink />
          </button>
        </div>

        <div className="h-5 w-px bg-slate-300 mx-0.5" />

        {/* Clear Format */}
        <button
          type="button"
          title="Clear Formatting"
          disabled={isHtmlMode}
          onMouseDown={(e) => { e.preventDefault(); handleClearFormat() }}
          className="p-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg shadow-2xs transition-colors disabled:opacity-40"
        >
          <Icons.Eraser />
        </button>

        {/* HTML Code View Toggle */}
        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            title={isHtmlMode ? "Switch to Visual Editor" : "View HTML Source"}
            onClick={handleToggleHtmlMode}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg border shadow-2xs transition-colors ${
              isHtmlMode 
                ? 'bg-blue-600 border-blue-600 text-white' 
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Icons.HtmlCode />
            <span>{isHtmlMode ? 'Visual' : 'HTML'}</span>
          </button>
        </div>

      </div>

      {/* LINK MODAL */}
      {showLinkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 max-w-md w-full animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Icons.Link /> Insert Link
            </h3>
            <form onSubmit={handleInsertLink} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Display Text (Optional)</label>
                <input
                  type="text"
                  placeholder="Text to display"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">URL / Link Address *</label>
                <input
                  type="text"
                  autoFocus
                  required
                  placeholder="https://example.com"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLinkModal(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                >
                  Insert Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDITING AREA */}
      <div className="relative min-h-[360px] max-h-[600px] overflow-y-auto bg-white">
        {isHtmlMode ? (
          <textarea
            value={htmlSource}
            onChange={handleHtmlSourceChange}
            placeholder="<p>Write your raw HTML code here...</p>"
            className="w-full h-full min-h-[360px] p-4 font-mono text-sm bg-slate-900 text-emerald-400 focus:outline-none resize-none"
            spellCheck="false"
          />
        ) : (
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleEditorInput}
            onKeyUp={checkActiveFormats}
            onMouseUp={checkActiveFormats}
            onClick={checkActiveFormats}
            data-placeholder="Start writing your blog content here... You can highlight text and use the toolbar above to style it."
            className="w-full min-h-[360px] p-5 text-slate-800 text-base leading-relaxed focus:outline-none cursor-text custom-editor-content"
          />
        )}
      </div>

      {/* STATUS & STATS FOOTER */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-4">
          <span>Words: <strong className="text-slate-700">{stats.words}</strong></span>
          <span>Characters: <strong className="text-slate-700">{stats.chars}</strong></span>
          <span>Reading time: <strong className="text-slate-700">~{Math.max(1, Math.ceil(stats.words / 200))} min</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] text-slate-400 font-normal">Custom Blog Editor</span>
        </div>
      </div>

      {/* STYLES FOR EDITOR CONTENT */}
      <style>{`
        .custom-editor-content:empty:before {
          content: attr(data-placeholder);
          color: #94a3b8;
          pointer-events: none;
          display: block;
        }
        .custom-editor-content h1 {
          font-size: 2rem;
          font-weight: 800;
          margin-top: 1.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.25;
          color: #0f172a;
        }
        .custom-editor-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
          color: #1e293b;
        }
        .custom-editor-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
          color: #334155;
        }
        .custom-editor-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 0.5rem;
          margin-bottom: 0.25rem;
          color: #475569;
        }
        .custom-editor-content p {
          margin-bottom: 0.75rem;
          line-height: 1.65;
        }
        .custom-editor-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .custom-editor-content ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .custom-editor-content li {
          margin-bottom: 0.25rem;
        }
        .custom-editor-content blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #64748b;
          font-style: italic;
          background: #f8fafc;
          padding: 0.5rem 1rem;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        .custom-editor-content pre {
          background: #0f172a;
          color: #38bdf8;
          padding: 1rem;
          border-radius: 0.5rem;
          font-family: monospace;
          font-size: 0.875rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .custom-editor-content a {
          color: #2563eb;
          text-decoration: underline;
          font-weight: 500;
        }
        .custom-editor-content hr {
          border: 0;
          border-top: 2px dashed #cbd5e1;
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  )
}

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1 text-sm font-semibold text-slate-700">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <RichEditor
            value={value !== undefined ? value : defaultValue}
            onChange={onChange}
          />
        )}
      />
    </div>
  )
}
