export class Computers {
    appSelectors = {
        catalogButton: "//android.widget.Button[contains(@text, 'Catalog Tab')]",
        computerImage: '~Computers',
        desktopsImage: '~Desktops',
        buildComputerCard: '~new Build your own computer 4.5 $1,200.00',
        cpuOption: '~2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]',
        pleaseSelectButton: '~Please select',
        storageCheckbox: '~320 GB',
        addToCartButton: '~Add to Cart',
        cartTabButton: '~Cart Tab 3 of 4',
        checkoutButton: '~Checkout',
        switchToggle: '//android.widget.Switch' // XPath used since no content-desc provided
    }

    async clickCatalogButton() {
        await $(this.appSelectors.catalogButton).click();
    }

    async clickComputersImage() {
        await $(this.appSelectors.computerImage).click();
    }

    async clickDesktopsImage() {
        await $(this.appSelectors.desktopsImage).click();
    }

    async selectBuildYourOwnComputer() {
        await $(this.appSelectors.buildComputerCard).click();
    }

    async selectCpuOption() {
        await $(this.appSelectors.cpuOption).click();
    }

    async openPleaseSelectDropdown() {
        await $(this.appSelectors.pleaseSelectButton).click();
    }

    async checkStorageOption() {
        await $(this.appSelectors.storageCheckbox).click();
    }

    async clickAddToCart() {
        await $(this.appSelectors.addToCartButton).click();
    }

    async clickCartTab() {
        await $(this.appSelectors.cartTabButton).click();
    }

    async clickCheckout() {
        await $(this.appSelectors.checkoutButton).click();
    }

    async toggleSwitch() {
        await $(this.appSelectors.switchToggle).click();
    }
}


