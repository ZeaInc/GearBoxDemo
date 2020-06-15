import { Component, Host, h, Prop, Listen, State } from '@stencil/core'

@Component({
  tag: 'zea-tree-view',
  styleUrl: 'zea-tree-view.css',
  shadow: true,
})

/**
 * Main class for the component
 */
export class ZeaTreeView {
  @Prop() rootItem: any

  @Prop() appData: any

  @State() mouseIsOver: any

  /**
   * onKeyDown
   * @param {any} event the event data
   */
  @Listen('keydown', { target: 'window' })
  onKeyDown(event) {
    if (!this.mouseIsOver) return

    const { selectionManager } = this.appData

    if (!selectionManager) return

    if (event.key == 'ArrowLeft') {
      const selectedItem = Array.from(selectionManager.getSelection())[0]
      this.collapseSelection(selectedItem)

      event.preventDefault()
      event.stopPropagation()
      return
    }

    if (event.key == 'ArrowRight') {
      const selectedItem = Array.from(selectionManager.getSelection())[0]
      this.expandSelection(selectedItem)

      event.preventDefault()
      event.stopPropagation()
      return
    }

    if (event.key == 'ArrowUp') {
      const item: any = Array.from(selectionManager.getSelection())[0]
      const newSelection = new Set()

      const owner = item.getOwner()
      if (owner) {
        const index = owner.getChildIndex(item)
        const prevSibling = owner.getChild(index - 1)

        if (index == 0) newSelection.add(owner)
        else if (
          prevSibling &&
          prevSibling.getNumChildren &&
          prevSibling.titleElement.isExpanded
        ) {
          newSelection.add(
            prevSibling.getChild(prevSibling.getNumChildren() - 1)
          )
        } else {
          newSelection.add(item.getOwner().getChild(index - 1))
        }
      }

      if (newSelection.size > 0) {
        selectionManager.setSelection(newSelection)
      }

      event.preventDefault()
      event.stopPropagation()
      return
    }

    if (event.key == 'ArrowDown') {
      const item: any = Array.from(selectionManager.getSelection())[0]
      const newSelection = new Set()

      if (item && item.getChild && item.titleElement.isExpanded) {
        newSelection.add(item.getChild(0))
      } else if (item.getOwner) {
        const index = item.getOwner().getChildIndex(item)
        const isLast = index == item.getOwner().getNumChildren() - 1
        if (!isLast) newSelection.add(item.getOwner().getChild(index + 1))
        else {
          const owner = item.getOwner()
          const ownerOwner = owner.getOwner()
          if (owner && ownerOwner) {
            const ownerIndex = ownerOwner.getChildIndex(owner)
            const ownerIsLast = ownerIndex == ownerOwner.getNumChildren() - 1
            if (!ownerIsLast) {
              newSelection.add(ownerOwner.getChild(ownerIndex + 1))
            }
          }
        }
      }

      if (newSelection.size > 0) {
        selectionManager.setSelection(newSelection)
      }

      event.preventDefault()
      event.stopPropagation()
      return
    }
  }

  /**
   * The expandSelection method.
   * @param {Map} item - The item we wish to expand to show.
   * @param {boolean} scrollToView - Whether to scroll the item into view
   */
  expandSelection(item, scrollToView = true) {
    if (
      item.getNumChildren() &&
      item.titleElement &&
      !item.titleElement.isExpanded
    )
      item.titleElement.isExpanded = true

    // causes the element to be always at the top of the view.
    if (scrollToView) this.scrollItemIntoView(item)
  }

  /**
   * The collapseSelection method.
   * @param {Map} item - The item we wish to expand to show.
   * @param {boolean} scrollToView - Whether to scroll the item into view
   */
  collapseSelection(item, scrollToView = true) {
    if (item.getNumChildren() && item.titleElement.isExpanded)
      item.titleElement.isExpanded = false
    if (scrollToView) this.scrollItemIntoView(item)
  }

  /**
   * Placeholder comment
   * @param {any} item The item
   */
  scrollItemIntoView(item) {
    // causes the element to be always at the top of the view.
    if (item && item.titleElement)
      item.titleElement.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'nearest',
      })
  }

  /**
   * onMouseEnter
   */
  onMouseEnter() {
    this.mouseIsOver = true
  }

  /**
   * onMouseLeave
   */
  onMouseLeave() {
    this.mouseIsOver = false
  }

  /**
   * Main render method for the component
   * @return {JSX} The generated markup
   */
  render() {
    return (
      <Host>
        <div
          class="wrap"
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <zea-tree-item-element
            ref={(el) => { if(this.rootItem) {this.rootItem.titleElement = el} } }
            is-root="true"
            expand-on-load="true"
            treeItem={this.rootItem}
            appData={this.appData}
            isExpanded={true}
          />
        </div>
      </Host>
    )
  }
}
