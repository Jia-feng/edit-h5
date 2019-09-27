/**
   * Custom `color picker` extension
   */
  var ColorPickerExtension = MediumEditor.extensions.button.extend({
      name: "colorPicker",
      action: "applyForeColor",
      aria: "文字颜色",
      contentDefault: "<span class='editor-color-picker'><i class=\"fa fa-pencil\"></i><span>",

      handleClick: function(e) {
          e.preventDefault();
          e.stopPropagation();

          this.selectionState = this.base.exportSelection();

          // If no text selected, stop here.
          if(this.selectionState && (this.selectionState.end - this.selectionState.start === 0) ) {
            return;
          }

          var fontSizeButton = this.base.options.extensions.fontSize.button;
          var fontSizePanel = this.base.options.extensions.fontSize.panel;
          var lineHeightButton = this.base.options.extensions.lineHeight.button;
          var lineHeightPanel = this.base.options.extensions.lineHeight.panel;
          if(fontSizeButton.parentNode.querySelector('.medium-editor-dropdown-panel')){
            fontSizeButton.parentNode.removeChild(fontSizePanel);
          }
          if(lineHeightButton.parentNode.querySelector('.medium-editor-dropdown-panel')){
            lineHeightButton.parentNode.removeChild(lineHeightPanel);
            }
          // colors for picker
          var pickerColors = [
            "#ffffff",
            "#000000",
            "#333333",
            "#555555",
            "#ff6f22",
            "#40b0f0",
            "#80c020",
            "#7d5ecb",
            "#e63d3d",
            "#1abc9c",
            "#2ecc71",
            "#3498db",
            "#9b59b6",
            "#34495e",
            "#16a085",
            "#27ae60",
            "#2980b9",
            "#8e44ad",
            "#2c3e50",
            "#f1c40f",
            "#e67e22",
            "#e74c3c",
            "#bdc3c7",
            "#95a5a6",
            "#f39c12"
          ];

          var picker = vanillaColorPicker(this.document.querySelector(".medium-editor-toolbar-active .editor-color-picker").parentNode);
          picker.set("customColors", pickerColors);
          picker.set("positionOnTop");
          picker.set("className","medium-editor-color-picker");
          picker.openPicker();
          picker.on("colorChosen", function(color) {
            this.base.importSelection(this.selectionState);
            this.document.execCommand("styleWithCSS", false, true);
            this.document.execCommand("foreColor", false, color);
            picker.destroyPicker();
          }.bind(this));
          this.picker = picker;
      }


  });

  /**
   * Custom `font size` extension
   */
  var FontSizeExtension = MediumEditor.extensions.button.extend({
      name: 'fontSize',
      action: 'applyFontSize',

      init: function(){
          this.button = this.document.createElement('button');
          this.button.classList.add('medium-editor-action');
          this.button.innerHTML = '<span class="editor-font-size"><i class="fa fa-font"></i><span>';
          this.button.title = '文字大小';

          var panel = this.document.createElement('div');
          var fontSizes = [12,13,16,18,24,32,48];
          var list = this.document.createElement('ul');
          var li;
          panel.classList.add('medium-editor-dropdown-panel');
          list.classList.add('medium-editor-fontsize-list');
          for(var i=0; i<fontSizes.length; i++){
              li = this.document.createElement('li');
              li.classList.add('medium-editor-fontsize-list-item');
              li.setAttribute('data-size', (i+1));
              li.style.fontSize = fontSizes[i] + 'px';
              li.innerHTML = fontSizes[i] + 'px';
              list.appendChild(li);
          }
          panel.appendChild(list);
          this.panel = panel
          this.on(this.button, 'click', this.handleClick.bind(this));
          this.on(this.panel.firstChild.childNodes, 'click', this.handleItemClick.bind(this));

          this.base.subscribe('hideToolbar', this.handleHideToolbarEvent.bind(this));

          // this.on(this.document, 'click', function(event){
          //  console.log(event.target)
          // })
      },

      getButton: function(){
          return this.button;
      },

      hidePanel: function(){
          if(this.button.parentNode.querySelector('.medium-editor-dropdown-panel')){
              this.button.parentNode.removeChild(this.panel);
          }
      },

      handleClick: function(event){
          event.preventDefault();
          event.stopPropagation();
          // this.base.saveSelection(); // 保存选区
        var lineHeightButton = this.base.options.extensions.lineHeight.button;
        var lineHeightPanel = this.base.options.extensions.lineHeight.panel;
        if(lineHeightButton.parentNode.querySelector('.medium-editor-dropdown-panel')){
          lineHeightButton.parentNode.removeChild(lineHeightPanel);
        }
          this.selectionState = this.base.exportSelection();
          if(!this.selectionState){
              return;
          }
          this.button.parentNode.appendChild(this.panel);
      },

      handleItemClick: function(event){
          event.preventDefault();
          event.stopPropagation();
          // this.base.restoreSelection();  // 还原选区
          this.base.importSelection(this.selectionState); // 回复以前选择的文本
          var item = event.currentTarget;
          var size = item.getAttribute('data-size');
          this.document.execCommand('fontSize', false, size);
          this.hidePanel();
      },

      handleHideToolbarEvent: function(event){
        this.hidePanel();
      }
  });
/**
   * Custom `line height` extension
   */
  var LineHeightExtension = MediumEditor.extensions.button.extend({
  name: 'lineHeight',
  action: 'applyLineHeight',

  init: function(){
    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
   this.button.innerHTML = '<span class="editor-line-height"><i class="fa fa-text-height"></i><span>';
    this.button.title = '字体间距';

    var panel = this.document.createElement('div');
    var lineHeights = [1.35,1.5,2,2.5,2.8,3,3.5,4,5];
    var list = this.document.createElement('ul');
    var li;
    panel.classList.add('medium-editor-dropdown-panel');
    list.classList.add('medium-editor-lineheight-list');
    for(var i=0; i<lineHeights.length; i++){
      li = this.document.createElement('li');
      li.classList.add('medium-editor-lineheight-list-item');
      li.setAttribute('data-size', lineHeights[i]);
      li.style.lineHeight = lineHeights[i];
      li.innerHTML = lineHeights[i];
      list.appendChild(li);
    }
    panel.appendChild(list);
    this.panel = panel
    this.on(this.button, 'click', this.handleClick.bind(this));
    this.on(this.panel.firstChild.childNodes, 'click', this.handleItemClick.bind(this));

    this.base.subscribe('hideToolbar', this.handleHideToolbarEvent.bind(this));

    // this.on(this.document, 'click', function(event){
    //  console.log(event.target)
    // })
  },

  getButton: function(){
    return this.button;
  },

  hidePanel: function(){
    if(this.button.parentNode.querySelector('.medium-editor-dropdown-panel')){
      this.button.parentNode.removeChild(this.panel);
    }
  },

  handleClick: function(event){
    event.preventDefault();
    event.stopPropagation();
    // this.base.saveSelection(); // 保存选区
    var fontSizeButton = this.base.options.extensions.fontSize.button;
    var fontSizePanel = this.base.options.extensions.fontSize.panel;
    if(fontSizeButton.parentNode.querySelector('.medium-editor-dropdown-panel')){
      fontSizeButton.parentNode.removeChild(fontSizePanel);
    }
    this.selectionState = this.base.exportSelection();
    if(!this.selectionState){
      return;
    }
    this.button.parentNode.appendChild(this.panel);
  },

  handleItemClick: function(event){
    event.preventDefault();
    event.stopPropagation();
    // this.base.restoreSelection();  // 还原选区
    this.base.importSelection(this.selectionState); // 回复以前选择的文本
    var item = event.currentTarget;
    var height = item.getAttribute('data-size');
     this.document.execCommand("lineHeight", false, height);
    var ogiThis = this.document.getElementsByClassName('ontext_edit')[this.selectionState.editableElementIndex];
     ogiThis.style.lineHeight = height;
     if(ogiThis.children.length > 0){
        for(var i= 0;i<ogiThis.children.length;i++){
           ogiThis.children[i].style.lineHeight = height;
        }
     }


    this.hidePanel();
  },
  handleHideToolbarEvent: function(event){
    this.hidePanel();
  }
});
