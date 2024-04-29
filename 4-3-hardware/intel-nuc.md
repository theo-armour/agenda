## Intel NUC

For years I've had big heavy laptops with external monitors that sit on my desk and never move until they are replaced.

Because they have the latest Intel CPUs and Nvidia GPUS they are expensive

For the time being I an trying the new generation of mini desktops

## To Do

  * theo logo

## Links

* https://community.intel.com/t5/Intel-NUCs/bd-p/nucs
* https://community.intel.com/t5/Intel-NUCs/NUC8i5BEH-USB-C-Port-not-working/m-p/1205814#M76071
* https://gtrusted.com/how-we-reset-the-thunderbolt-3-port-on-the-intel-skull-canyon-nuc6i7kyk-nuc-kit

## Theo NUC

* 2023-04-24 ~ monitors not displaying? Pull out the power cord from back device fixes

## NUC 11 Extreme

Ordered 2021-09-18:
* https://www.amazon.com/Intel-Enthusiast-NUC11PHKi7C-Barebone-i7-1165G7/dp/B09DDJFSNY
* https://www.amazon.com/NUC11PHKi7C-System-Installed-Configured-SSD980/dp/B097Z4LBQB/ ~ $1,900

* https://simplynuc.com/beast-canyon/
* https://www.bhphotovideo.com/c/product/1653125-REG/intel_rnuc11phki7c00_phantom_cny_i7_2060_enthus.html
* https://www.amazon.com/NUC11PHKi7C-System-Installed-Configured-SSD980/dp/B097Z4JV4L
* https://www.theverge.com/2021/7/29/22599092/intel-nuc-11-extreme-beast-canyon-specs-price-availability-preview?scrolla=5eb6d68b7fedc32c19ef33b4
* https://www.intel.com/content/www/us/en/products/details/nuc/elements/compute.html
* https://www.intel.com/content/www/us/en/products/compare.html?productIds=195961,205608,209677


### Pros

* Cheaper
* More upgradeable tha most laptops
* A ton of ports

### Cone

* need to add everything: keyboard, speakers, camera - which ends up using a lot of the ports


### Spec

Intel NUC NUC11PHKi7CAA1
Serial #: BTPH1260038E
S/A: M26148-404
Device ID: D66C24B0-D3AF-4DFA-950B-3E11CF3D011D
Product ID: 00325-96795-87190-AAOEM

Install date: 09/20/21?

Intel NUC NUC11PHKi7CAA1 Gaming Computer
Intel Core i7-1165G7
2.8 - 4.7GHz, 16GB RAM
512GB PCIe SSD
28W Intel Iris Xe Graphics
NVI-Dia GeForce RTX2060 Discrete Graphics w/6GB GDDR6
Win 10 Home

BIOS Update and Recovery Instructions for Intel® NUCs with the Aptio® V UEFI Firmware Core
* https://www.intel.com/content/www/us/en/support/articles/000033291/intel-nuc.html
* https://www.intel.com/content/www/us/en/support/articles/000005508/intel-nuc.html
* https://www.intel.com/content/www/us/en/support/articles/000058155/intel-nuc.html

User Guide

* https://www.intel.com/content/dam/support/us/en/documents/intel-nuc/NUC11PHKi7C_UserGuide.pdf

BIOS

*   F2 on boot
*   F10 for boot options
*   https://www.intel.com/content/www/us/en/support/articles/000005636/intel-nuc.html ~ older BIOS??
*   https://www.intel.com/content/www/us/en/support/articles/000033291/intel-nuc.html




## Service Request https://supporttickets.intel.com/requestdetail?id=5004U00000wCQR4QAO&lang=en-US

*  reboot every day. Several times a week, after all logged in and apparently operating normally but soon after boot a blue screen appears with message "driver power state failure". System captures the data; indicating % complete then reboots.

Googled

Went here: https://windowsreport.com/driver-power-state-failure-windows-10-nvidia-ssd/

PS C:\Users\tarmo> sfc /scannow

Beginning system scan.  This process will take some time.

Beginning verification phase of system scan.
Verification 100% complete.

Windows Resource Protection found corrupt files and successfully repaired them.
For online repairs, details are included in the CBS log file located at
windir\Logs\CBS\CBS.log. For example C:\Windows\Logs\CBS\CBS.log. For offline
repairs, details are included in the log file provided by the /OFFLOGFILE flag.

File with error: BthHfEnum.sys
* https://www.auslogics.com/en/articles/fix-bthhfenum-sys-blue-screen-error/



### To Do

* 16GB USB drive for W10 recovery disk
*   Refactor to 32 GB RAM
*   Add SSD
*   Take apart and update logo


## 2021-12-27

I reboot every day. Several times a week, after all logged in and operating normally, a blue screen appears. Message "driver power state failure" then system records data indicating % completer then reboots.

* driver power state failure
